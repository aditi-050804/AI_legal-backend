import { Resend } from "resend";

export const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : { emails: { send: async () => console.log("⚠️ Resend API Key missing. Email mocking enabled.") } };

