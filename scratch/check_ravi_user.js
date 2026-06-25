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
    const UserQuota = (await import('../models/UserQuota.js')).default;
    
    const email = "ravichandanrc1@gmail.com";
    const user = await User.findOne({ email }).lean();
    console.log("User Document:");
    console.log(JSON.stringify(user, null, 2));
    
    if (!user) {
        console.log("User not found!");
        await mongoose.disconnect();
        return;
    }
    
    const userId = user._id;
    const subscription = await Subscription.findOne({ userId, subscriptionStatus: 'active' }).populate('planId').lean();
    console.log("\nSubscription Document:");
    console.log(JSON.stringify(subscription, null, 2));
    
    const { getUserPlan } = await import('../services/subscriptionService.js');
    const plan = await getUserPlan(userId);
    console.log("\ngetUserPlan(userId) Output:");
    console.log(JSON.stringify(plan, null, 2));
    
    await mongoose.disconnect();
}

check().catch(console.error);
