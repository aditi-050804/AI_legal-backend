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
    
    const userById = await User.findById("6a427ca84fa51caf724c3800").lean();
    console.log("User by ID 6a427ca84fa51caf724c3800:", userById);
    
    await mongoose.disconnect();
}

check().catch(console.error);
