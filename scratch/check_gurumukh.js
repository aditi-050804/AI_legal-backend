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
    
    const User = (await import('../models/User.js')).default;
    const Subscription = (await import('../models/Subscription.js')).default;
    
    const users = await User.find({ email: /gurumukhahuja/i }).lean();
    console.log(`Found ${users.length} users with email gurumukhahuja:`);
    for (const u of users) {
        console.log(`-----------------------------------------`);
        console.log(`User ID: ${u._id}`);
        console.log(`Email: ${u.email}`);
        console.log(`Name: ${u.name}`);
        console.log(`Provider: ${u.provider} (ID: ${u.providerId})`);
        
        const sub = await Subscription.findOne({ userId: u._id, subscriptionStatus: 'active' }).populate('planId').lean();
        if (sub) {
            console.log(`  Plan: ${sub.planId?.planName || 'Unknown'} (Key: ${sub.planId?.planKey})`);
            console.log(`  Renewal: ${sub.renewalDate}`);
        } else {
            console.log(`  Plan: None (Free)`);
        }
    }
    
    await mongoose.disconnect();
}

check().catch(console.error);
