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
    const User = (await import('../models/User.js')).default;
    const Subscription = (await import('../models/Subscription.js')).default;
    
    // Find the user associated with Session ID that is undefined
    const userId = "6a3826f6a7c09a40a389c891";
    const user = await User.findById(userId).lean();
    console.log("User Document for 6a3826f6a7c09a40a389c891:");
    console.log(JSON.stringify(user, null, 2));
    
    const sub = await Subscription.findOne({ userId }).populate('planId').lean();
    console.log("Subscription:");
    console.log(JSON.stringify(sub, null, 2));
    
    await mongoose.disconnect();
}

check().catch(console.error);
