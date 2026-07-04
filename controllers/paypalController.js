/**
 * paypalController.js
 * ────────────────────
 * Handles PayPal payment processing — mirrors subscriptionController.js (Razorpay flow) exactly.
 *
 * HOW PAYPAL WORKS:
 * 1. Frontend calls /payment/paypal/create-order → backend creates a PayPal Order → returns orderID
 * 2. PayPal JS SDK opens the payment popup (user approves)
 * 3. Frontend calls /payment/paypal/capture with orderID → backend captures & verifies → activates plan
 *
 * REQUIREMENTS:
 * - PAYPAL_CLIENT_ID set in .env
 * - PAYPAL_CLIENT_SECRET set in .env
 * - PAYPAL_MODE set to 'live' or 'sandbox' in .env
 */

import axios from 'axios';
import Subscription from '../models/Subscription.js';
import Plan from '../models/Plan.js';
import User from '../models/User.js';
import UserQuota from '../models/UserQuota.js';

// ─── PayPal API Base URL ──────────────────────────────────────────────────────
const getPayPalBaseURL = () => process.env.PAYPAL_MODE === 'sandbox'
    ? 'https://api-m.sandbox.paypal.com'
    : 'https://api-m.paypal.com';

// ─── Helper: Get PayPal Access Token ─────────────────────────────────────────
const getPayPalAccessToken = async () => {
    const clientId = process.env.PAYPAL_CLIENT_ID;
    const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
        throw new Error('PayPal credentials not configured. Set PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET in .env');
    }

    const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
    const BASE_URL = getPayPalBaseURL();

    const response = await axios.post(
        `${BASE_URL}/v1/oauth2/token`,
        'grant_type=client_credentials',
        {
            headers: {
                'Authorization': `Basic ${credentials}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }
    );

    return response.data.access_token;
};

// ─── STEP 1: Create PayPal Order ─────────────────────────────────────────────

/**
 * POST /payment/paypal/create-order
 * Creates a PayPal order for a plan purchase.
 */
export const createPaypalOrder = async (req, res) => {
    try {
        const { planId, billingCycle } = req.body;

        if (!planId) {
            return res.status(400).json({ success: false, message: 'planId is required' });
        }

        const plan = await Plan.findById(planId);
        if (!plan) {
            return res.status(404).json({ success: false, message: 'Plan not found' });
        }

        // Get amount in INR (same as Razorpay)
        const amountINR = billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;

        // Free plan: no payment needed
        if (amountINR === 0) {
            return res.status(200).json({ success: true, isFree: true });
        }

        // Convert INR → USD (PayPal uses USD; 1 USD ≈ PAYPAL_INR_TO_USD_RATE INR)
        const CONVERSION_RATE = parseFloat(process.env.PAYPAL_INR_TO_USD_RATE || '85');
        const amountUSD = (amountINR / CONVERSION_RATE).toFixed(2);

        const BASE_URL = getPayPalBaseURL();
        const accessToken = await getPayPalAccessToken();

        // Create PayPal order via REST API
        const orderPayload = {
            intent: 'CAPTURE',
            purchase_units: [
                {
                    amount: {
                        currency_code: 'USD',
                        value: amountUSD,
                    },
                    description: `AISA - ${plan.planName} (${billingCycle})`,
                    custom_id: JSON.stringify({ planId: plan._id.toString(), billingCycle }),
                }
            ],
            application_context: {
                brand_name: 'AISA',
                landing_page: 'BILLING',
                user_action: 'PAY_NOW',
                return_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/pricing`,
                cancel_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/pricing`,
            }
        };

        const response = await axios.post(
            `${BASE_URL}/v2/checkout/orders`,
            orderPayload,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                }
            }
        );

        const order = response.data;
        console.log(`[PayPal] ✅ Order created: ${order.id} for plan ${plan.planName} (${amountUSD} USD)`);

        return res.status(200).json({
            success: true,
            orderID: order.id,
            amountUSD,
            amountINR,
            currency: 'USD',
            planName: plan.planName,
        });

    } catch (error) {
        const paypalErr = error?.response?.data;
        console.error('[PayPal] createPaypalOrder error:', paypalErr || error.message);
        return res.status(500).json({
            success: false,
            message: paypalErr?.message || paypalErr?.error_description || error.message || 'Failed to create PayPal order',
            details: paypalErr,
        });
    }
};

// ─── STEP 2: Capture PayPal Order & Activate Plan ────────────────────────────

/**
 * POST /payment/paypal/capture
 * Captures the approved PayPal payment and activates the user's plan.
 * Mirrors purchasePlan() in subscriptionController.js exactly.
 */
export const capturePaypalOrder = async (req, res) => {
    try {
        const { orderID, planId, billingCycle } = req.body;
        const userId = req.user.id || req.user._id;

        if (!orderID || !planId) {
            return res.status(400).json({ success: false, message: 'orderID and planId are required' });
        }

        const BASE_URL = getPayPalBaseURL();
        const accessToken = await getPayPalAccessToken();

        // Capture the PayPal order
        const captureResponse = await axios.post(
            `${BASE_URL}/v2/checkout/orders/${orderID}/capture`,
            {},
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                }
            }
        );

        const captureData = captureResponse.data;

        // Verify capture was COMPLETED
        if (captureData.status !== 'COMPLETED') {
            return res.status(400).json({
                success: false,
                message: `PayPal payment not completed. Status: ${captureData.status}`
            });
        }

        const paypalPaymentId = captureData.purchase_units?.[0]?.payments?.captures?.[0]?.id || orderID;

        // ── Activate the Plan (same logic as purchasePlan in subscriptionController.js) ──

        const plan = await Plan.findById(planId);
        if (!plan) return res.status(404).json({ success: false, message: 'Plan not found' });

        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ success: false, message: 'User not found' });

        if (plan.planName === 'Founder Plan') {
            const founderCount = await User.countDocuments({ founderStatus: true });
            if (founderCount >= 500 && !user.founderStatus) {
                return res.status(400).json({ success: false, message: 'Founder plan limit reached.' });
            }
            user.founderStatus = true;
        }

        // Cancel any existing active subscriptions
        await Subscription.updateMany(
            { userId, subscriptionStatus: 'active' },
            { subscriptionStatus: 'cancelled' }
        );

        // Calculate renewal date (same logic as subscriptionController.js)
        let renewalDate = new Date();
        if (plan.planName.toLowerCase().includes('founder')) {
            renewalDate.setFullYear(renewalDate.getFullYear() + 100);
        } else if (billingCycle === 'yearly') {
            const months = plan.validityYearly || 12;
            renewalDate.setMonth(renewalDate.getMonth() + months);
        } else {
            const months = plan.validityMonthly || 1;
            renewalDate.setMonth(renewalDate.getMonth() + months);
        }

        // Create subscription record — same fields as subscriptionController.js
        const newSubscription = await Subscription.create({
            userId,
            planId: plan._id,
            creditsRemaining: 0,
            billingCycle,
            subscriptionStart: new Date(),
            renewalDate,
            subscriptionStatus: 'active',
            paymentId: paypalPaymentId,
        });

        // Reset quota usage on plan upgrade
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

        console.log(`[PayPal] ✅ Plan activated for user ${userId}: ${plan.planName} | PayPal ID: ${paypalPaymentId}`);

        return res.status(200).json({
            success: true,
            subscription: newSubscription,
            message: 'Plan upgraded successfully.',
            planKey: plan.planId || 'Plan_0',
        });

    } catch (error) {
        const paypalErr = error?.response?.data;
        console.error('[PayPal] capturePaypalOrder error:', paypalErr || error.message);
        return res.status(500).json({
            success: false,
            message: paypalErr?.message || paypalErr?.error_description || error.message || 'Failed to capture PayPal payment',
            details: paypalErr,
        });
    }
};
