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
    const plans = await Plan.find({}).lean();
    console.log("PLANS IN DB:");
    console.log(JSON.stringify(plans, null, 2));
    
    await mongoose.disconnect();
}

check().catch(console.error);
