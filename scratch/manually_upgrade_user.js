import mongoose from 'mongoose';
import 'dotenv/config';
import connectDB from '../config/db.js';
import User from '../models/User.js';
import Subscription from '../models/Subscription.js';
import Plan from '../models/Plan.js';
import UserQuota from '../models/UserQuota.js';

async function run() {
    await connectDB();
    const email = 'yugamcteam@gmail.com';
    const user = await User.findOne({ email });
    if (!user) {
        console.log("No user found with email:", email);
        process.exit(1);
    }
    
    // Find Enterprise plan
    const plan = await Plan.findOne({ planId: 'Plan_3' });
    if (!plan) {
        console.log("Enterprise plan (Plan_3) not found!");
        process.exit(1);
    }

    // Cancel all existing subscriptions
    await Subscription.updateMany(
        { userId: user._id, subscriptionStatus: { $in: ['active', 'grace_period'] } },
        { $set: { subscriptionStatus: 'cancelled' } }
    );

    // Create new active Enterprise subscription
    const expiresDate = new Date();
    expiresDate.setMonth(expiresDate.getMonth() + 1);

    await Subscription.create({
        userId: user._id,
        planId: plan._id,
        creditsRemaining: 0,
        billingCycle: 'monthly',
        subscriptionStatus: 'active',
        transactionId: `manual_upgrade_${Date.now()}`,
        originalTransactionId: `manual_upgrade_${Date.now()}`,
        productId: 'aisa_enterprise',
        purchaseDate: new Date(),
        expiresDate: expiresDate,
        environment: 'Sandbox'
    });

    // Reset User Quota
    await UserQuota.findOneAndUpdate(
        { userId: user._id },
        {
            $set: {
                imagesUsed: 0,
                carouselsUsed: 0,
                videosUsed: 0,
                planActivatedAt: new Date(),
                planExpiresAt: expiresDate
            }
        },
        { upsert: true }
    );

    console.log("Manually upgraded user to Enterprise plan!");
    process.exit(0);
}

run().catch(console.error);
