import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dns from 'dns';

try {
    dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (e) {}

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '..', '.env') });

const MONGO_URI = process.env.MONGODB_ATLAS_URI || process.env.MONGO_URI;

async function check() {
    await mongoose.connect(MONGO_URI);
    const Plan = (await import('../models/Plan.js')).default;
    const Subscription = (await import('../models/Subscription.js')).default;
    const User = (await import('../models/User.js')).default;
    
    // Find all users with active subscription
    const subs = await Subscription.find({ subscriptionStatus: 'active' }).populate('planId').lean();
    console.log(`Total active subscriptions: ${subs.length}`);
    
    const userMap = {};
    for (const sub of subs) {
        if (!userMap[sub.userId]) {
            userMap[sub.userId] = [];
        }
        userMap[sub.userId].push(sub);
    }
    
    for (const [userId, userSubs] of Object.entries(userMap)) {
        const userObj = await User.findById(userId).lean();
        console.log(`\n👤 User: ${userObj?.email} (${userId})`);
        for (const sub of userSubs) {
            console.log(`  - Sub: ${sub._id} | Plan: ${sub.planId?.planName} (${sub.planId?.planId}) | Status: ${sub.subscriptionStatus} | Start: ${sub.subscriptionStart} | Renewal: ${sub.renewalDate}`);
        }
        
        // Let's check what getUserPlan returns for this user
        const { getUserPlan } = await import('../services/subscriptionService.js');
        const plan = await getUserPlan(userId);
        console.log(`  => resolved getUserPlan Key: ${plan.planKey}`);
    }
    
    await mongoose.disconnect();
}

check().catch(console.error);
