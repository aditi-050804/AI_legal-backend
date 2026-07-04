import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import dns from 'dns';

// Force Node.js to use public DNS resolvers
try {
    dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (e) {
    console.warn('⚠️ Failed to set custom DNS servers:', e.message);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '..', '.env') });

const UserSchema = new mongoose.Schema({}, { strict: false });
const User = mongoose.models.User || mongoose.model('User', UserSchema, 'users');

async function run() {
    try {
        await mongoose.connect(process.env.MONGODB_ATLAS_URI);
        console.log('Connected to MongoDB');

        const user = await User.findOne({ email: 'yugamcteam@gmail.com' });
        if (!user) {
            console.log("User not found!");
            process.exit(1);
        }

        console.log("User in DB:", {
            email: user.email,
            termsVersion: user.termsVersion,
            privacyVersion: user.privacyVersion,
            acceptedTerms: user.acceptedTerms,
            acceptedPrivacy: user.acceptedPrivacy
        });
        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}
run();
