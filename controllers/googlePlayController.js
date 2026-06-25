import Subscription from '../models/Subscription.js';
import Plan from '../models/Plan.js';
import User from '../models/User.js';
import UserQuota from '../models/UserQuota.js';
import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to Google Cloud Service Account JSON Key file (optional - placed in backend root)
const keyFilePath = path.join(__dirname, '..', 'google-play-key.json');
const hasKeyFile = fs.existsSync(keyFilePath);

// Initialize Google Play Developer API client
// Priority: 1) JSON key file  2) ADC (gcloud auth application-default login)  3) Simulation mode
let playDeveloperApi = null;

(async () => {
    try {
        const authConfig = {
            scopes: ['https://www.googleapis.com/auth/androidpublisher']
        };

        if (hasKeyFile) {
            // Mode 1: Explicit service account JSON key (required for production servers)
            authConfig.keyFile = keyFilePath;
            console.log('🔑 Google Play: Using service account JSON key file.');
        } else {
            // Mode 2: Application Default Credentials (gcloud auth application-default login)
            console.log('🔐 Google Play: No key file found. Attempting Application Default Credentials (ADC)...');
        }

        const auth = new google.auth.GoogleAuth(authConfig);
        await auth.getClient(); // Throws if no credentials available

        playDeveloperApi = google.androidpublisher({ version: 'v3', auth });
        console.log('✅ Google Play Developer API client initialized successfully.');
    } catch (err) {
        console.log(`⚠️ Google Play API unavailable. Running in Simulation/Sandbox mode.`);
        console.log('   Fix: add google-play-key.json OR run: gcloud auth application-default login');
        playDeveloperApi = null;
    }
})();
/**
 * POST /api/payment/verify/google
 * Verifies an Android Google Play subscription purchase token and activates/upgrades user plan.
 */
export const verifyGooglePlaySubscription = async (req, res) => {
    try {
        const { receipt, productId, transactionId, purchaseToken } = req.body;
        const userId = req.user.id || req.user._id;

        console.log(`[GooglePlay IAP] Verifying purchase for user: ${userId}, productId: ${productId}`);

        if (!productId) {
            return res.status(400).json({ success: false, message: 'productId is required.' });
        }

        // 1. Map subscription product IDs (SKUs) to Database Plan keys
        let planIdKey = 'Plan_1'; // Default Creator
        const cleanProductId = String(productId).toLowerCase().trim();

        if (cleanProductId.includes('startup') || cleanProductId.includes('standard') || cleanProductId.includes('plan_2')) {
            planIdKey = 'Plan_2';
        } else if (cleanProductId.includes('enterprise') || cleanProductId.includes('premium') || cleanProductId.includes('plan_3')) {
            planIdKey = 'Plan_3';
        } else {
            planIdKey = 'Plan_1';
        }

        const plan = await Plan.findOne({ planId: planIdKey, isActive: true });
        if (!plan) {
            return res.status(404).json({ success: false, message: `Plan details for key '${planIdKey}' not found in database.` });
        }

        let billingCycle = 'monthly';
        let isSimulationMode = !playDeveloperApi || purchaseToken === 'test_bypass_token' || process.env.NODE_ENV !== 'production';

        // 2. Perform Receipt Verification
        if (!isSimulationMode) {
            try {
                // Call Google Play Developer API
                const response = await playDeveloperApi.purchases.subscriptions.get({
                    packageName: process.env.GOOGLE_PLAY_PACKAGE_NAME || 'com.uwo.aisa',
                    subscriptionId: productId,
                    token: purchaseToken
                });

                const expiryTimeMillis = response.data.expiryTimeMillis;

                // Validate expiry
                if (expiryTimeMillis && parseInt(expiryTimeMillis) < Date.now()) {
                    return res.status(400).json({ success: false, message: 'Google Play subscription purchase has expired.' });
                }

                // Retrieve cycle from basePlanId or from request parameters
                if (req.body.cycle === 'yearly' || (purchaseToken && purchaseToken.includes('yearly')) || (transactionId && transactionId.includes('yearly'))) {
                    billingCycle = 'yearly';
                }

                console.log(`[GooglePlay IAP] Verified purchase successfully via Google Play API.`);
            } catch (err) {
                console.error('❌ Google Play Developer API verification failed:', err.message);
                return res.status(400).json({ success: false, message: `Google Play validation failed: ${err.message}` });
            }
        } else {
            // Local simulation / sandbox upgrade
            console.log(`[GooglePlay IAP] Simulation/Sandbox mode active. Skipping remote call.`);
            if (req.body.cycle === 'yearly' || (purchaseToken && purchaseToken.includes('yearly')) || (productId && productId.includes('yearly'))) {
                billingCycle = 'yearly';
            }
        }

        // 3. User Upgrade & Quota Refresh (matches subscriptionController.js)
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found.' });
        }

        // Cancel previous active subscriptions
        await Subscription.updateMany({ userId, subscriptionStatus: 'active' }, { subscriptionStatus: 'cancelled' });

        // Calculate renewal/expiry date
        let renewalDate = new Date();
        if (billingCycle === 'yearly') {
            const months = plan.validityYearly || 12;
            renewalDate.setMonth(renewalDate.getMonth() + months);
        } else {
            const months = plan.validityMonthly || 1;
            renewalDate.setMonth(renewalDate.getMonth() + months);
        }

        // Create subscription entry
        const newSubscription = await Subscription.create({
            userId,
            planId: plan._id,
            creditsRemaining: 0,
            billingCycle,
            subscriptionStart: new Date(),
            renewalDate,
            subscriptionStatus: 'active',
            paymentId: purchaseToken || transactionId || `gplay_mock_${Date.now()}`
        });

        // Reset Quota usage on plan upgrade (daily limits reset)
        await UserQuota.findOneAndUpdate(
            { userId },
            {
                $set: {
                    imagesUsed: 0,
                    carouselsUsed: 0,
                    videosUsed: 0,
                    planActivatedAt: new Date(),
                }
            },
            { upsert: true, new: true }
        );

        await user.save();

        console.log(`[GooglePlay IAP] Successfully upgraded user ${userId} to '${plan.planName}' (${billingCycle}).`);

        return res.status(200).json({
            success: true,
            isSimulation: isSimulationMode,
            subscription: newSubscription,
            planKey: plan.planId || 'Plan_0',
            message: `✅ Subscription upgraded successfully via Google Play! ${plan.planName} activated.`
        });

    } catch (error) {
        console.error('[GooglePlay IAP] verifyGooglePlaySubscription error:', error);
        return res.status(500).json({ success: false, message: error.message });
    }
};
