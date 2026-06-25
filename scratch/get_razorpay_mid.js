import dotenv from 'dotenv';
import Razorpay from 'razorpay';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

async function main() {
    try {
        console.log("Using Key ID:", process.env.RAZORPAY_KEY_ID);
        
        // Try fetching orders to inspect the merchant/account ID or fetch details
        const orders = await razorpay.orders.all({ count: 1 });
        console.log("Orders sample:", JSON.stringify(orders, null, 2));

        // Try getting payments to check their metadata
        const payments = await razorpay.payments.all({ count: 1 });
        console.log("Payments sample:", JSON.stringify(payments, null, 2));
        
        // Let's also check if we can make a direct request to get merchant details
        // The key_id itself contains the merchant account reference, but let's see if we can call API
        console.log("Finished querying Razorpay.");
    } catch (err) {
        console.error("Error querying Razorpay:", err);
    }
}

main();
