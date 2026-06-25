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
    
    const userId = "6a3826f6a7c09a40a389c891"; // User with Startup sub
    const sub = await Subscription.findOne({ userId, subscriptionStatus: 'active' }).populate('planId').lean();
    console.log("Subscription Document:");
    console.log(JSON.stringify(sub, null, 2));
    
    // Let's run the exact logic in getUserPlan:
    const plan = sub.planId;
    console.log("Plan in sub:", plan);
    console.log("sub.renewalDate:", sub.renewalDate, typeof sub.renewalDate);
    console.log("new Date(sub.renewalDate):", new Date(sub.renewalDate));
    console.log("new Date():", new Date());
    console.log("Expired check: ", sub.renewalDate && new Date(sub.renewalDate) < new Date());
    
    const planIdStr = (plan.planId || plan.planName || '').toLowerCase();
    console.log("planIdStr:", planIdStr);
    let planKey = 'Plan_0';
    if (planIdStr.includes('plan_3') || planIdStr.includes('business') || plan.priceMonthly >= 2499) planKey = 'Plan_3';
    else if (planIdStr.includes('plan_2') || planIdStr.includes('pro') || plan.priceMonthly >= 999) planKey = 'Plan_2';
    else if (planIdStr.includes('plan_1') || planIdStr.includes('starter') || plan.priceMonthly >= 499) planKey = 'Plan_1';
    else if (planIdStr.includes('founder')) planKey = 'Plan_3'; 
    console.log("planKey resolved:", planKey);
    
    await mongoose.disconnect();
}

check().catch(console.error);
