import mongoose from 'mongoose';

/**
 * UserQuota — Tracks per-user quota consumption for the plan-based access system.
 *
 * Daily counters (imagesUsed, carouselsUsed, videosUsed) reset each day based on `date`.
 * Chat counter (chatUsed) is a lifetime total for Free plan users (100 total messages).
 * For paid plans, chatUsed is not enforced (chatScope = 'unlimited').
 */
const UserQuotaSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true  // One document per user; daily fields reset by comparing `date`
    },

    // ── DAILY COUNTERS (reset each calendar day) ───────────────────────────────
    date: { type: String, default: '' }, // 'YYYY-MM-DD' — the last day counters were active
    imagesUsed: { type: Number, default: 0 },    // standalone image generation
    carouselsUsed: { type: Number, default: 0 },  // AIAD carousel generation
    videosUsed: { type: Number, default: 0 },     // standalone video generation

    // ── LIFETIME CHAT COUNTER (for Free plan) ─────────────────────────────────
    chatUsed: { type: Number, default: 0 },       // total messages sent (all-time for Free users)

    // ── PLAN EXPIRY TRACKING ──────────────────────────────────────────────────
    planActivatedAt: { type: Date, default: Date.now }, // when the current plan was activated
    planExpiresAt: { type: Date },               // when the plan expires (Free = 90 days from activation)

}, { timestamps: true });



export default mongoose.models.UserQuota || mongoose.model('UserQuota', UserQuotaSchema);
