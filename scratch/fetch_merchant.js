import dotenv from 'dotenv';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });

const keyId = process.env.RAZORPAY_KEY_ID;
const keySecret = process.env.RAZORPAY_KEY_SECRET;

async function main() {
    const auth = Buffer.from(`${keyId}:${keySecret}`).toString('base64');
    
    // Try different endpoints to get merchant info
    const endpoints = [
        'https://api.razorpay.com/v1/merchant',
        'https://api.razorpay.com/v1/accounts/me',
        'https://api.razorpay.com/v1/me'
    ];

    for (const url of endpoints) {
        try {
            console.log(`Trying URL: ${url}`);
            const res = await axios.get(url, {
                headers: {
                    Authorization: `Basic ${auth}`
                }
            });
            console.log(`Success for ${url}:`, JSON.stringify(res.data, null, 2));
            return;
        } catch (err) {
            console.log(`Failed for ${url}:`, err.response?.status, err.response?.data || err.message);
        }
    }
}

main();
