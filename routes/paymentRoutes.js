import express from 'express';
import { getPaymentHistory, createOrder, verifyPayment } from '../controllers/paymentController.js';
import { createApplePayOrder, validateAppleMerchant, verifyApplePayment } from '../controllers/applePayController.js';
import { verifyGooglePlaySubscription } from '../controllers/googlePlayController.js';
import { verifyAppleStoreSubscription } from '../controllers/appleStoreController.js';
import { verifyToken } from '../middleware/authorization.js';

const router = express.Router();

// ─── Existing Razorpay Routes ────────────────────────────────────────────────
router.get('/history', verifyToken, getPaymentHistory);
router.post('/create-order', verifyToken, createOrder);
router.post('/verify-payment', verifyToken, verifyPayment);

// ─── Google Play Store In-App Purchase Route (Mobile App) ───────────────────
router.post('/verify/google', verifyToken, verifyGooglePlaySubscription);

// ─── Apple App Store In-App Purchase Route (Mobile App) ──────────────────────
router.post('/verify/apple', verifyToken, verifyAppleStoreSubscription);

// ─── Apple Pay Routes ────────────────────────────────────────────────────────
// Step 1: Create Razorpay order + get applePayRequest config
router.post('/apple-pay/create-order', verifyToken, createApplePayOrder);
// Step 2: Validate merchant session (called during ApplePaySession.onvalidatemerchant)
router.post('/apple-pay/validate-merchant', verifyToken, validateAppleMerchant);
// Step 3: Verify payment + activate plan
router.post('/apple-pay/verify', verifyToken, verifyApplePayment);

export default router;
