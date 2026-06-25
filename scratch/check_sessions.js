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
    const Session = (await import('../models/Session.js')).default;
    const User = (await import('../models/User.js')).default;
    
    console.log("Retrieving recent sessions...");
    const sessions = await Session.find({}).sort({ updatedAt: -1 }).limit(10).lean();
    
    for (const sess of sessions) {
        const user = await User.findById(sess.userId).lean();
        console.log(`Session ID: ${sess._id} | User: ${user?.email} | LastActive: ${new Date(sess.lastActive)}`);
    }
    
    await mongoose.disconnect();
}

check().catch(console.error);
