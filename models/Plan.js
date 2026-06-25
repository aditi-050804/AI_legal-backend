import mongoose from 'mongoose';

const planSchema = new mongoose.Schema({
    planId: { type: String, required: true, unique: true },
    planName: { type: String, required: true },
    priceMonthly: { type: Number, required: true },
    priceYearly: { type: Number, required: true },
    priceYearlyPerMonth: { type: Number },

    // ── QUOTA FIELDS (replaces credit system) ─────────────────────────────────
    chatLimit: { type: Number, default: 100 },    // -1 = unlimited; else max total messages
    chatScope: { type: String, enum: ['total', 'unlimited'], default: 'total' }, // 'total' = lifetime cap, 'unlimited' = no cap
    imageLimit: { type: Number, default: 0 },      // per day; 0 = blocked
    carouselLimit: { type: Number, default: 0 },   // AIAD carousel per day; 0 = blocked
    videoLimit: { type: Number, default: 0 },      // standalone video gen per day; 0 = blocked
    editImageAllowed: { type: Boolean, default: false }, // image editing allowed
    cashflowAllowed: { type: Boolean, default: false },  // CashFlow stock tabs allowed
    validityDays: { type: Number, default: 90 },   // how many days plan is valid (Free=90, paid plans based on billing)
    aiLegalAllowed: { type: Boolean, default: false },
    aiAdsAllowed: { type: Boolean, default: false },
    voiceGenAllowed: { type: Boolean, default: false },
    webSearchAllowed: { type: Boolean, default: false },
    deepSearchAllowed: { type: Boolean, default: false },
    codeWriterAllowed: { type: Boolean, default: false },
    documentConvertAllowed: { type: Boolean, default: false },

    // ── LEGACY FIELDS (kept for DB compatibility, not used for enforcement) ────
    validityMonthly: { type: Number, default: 1 },
    validityYearly: { type: Number, default: 12 },

    features: [{ type: String }],
    badge: { type: String, default: "" },
    isPopular: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('Plan', planSchema);
