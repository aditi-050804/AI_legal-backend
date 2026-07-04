import axios from 'axios';

async function test() {
    try {
        console.log("Testing social-login with accepted terms...");
        const res = await axios.post('http://localhost:8080/api/auth/social-login', {
            email: 'yugamcteam@gmail.com',
            name: 'Google User',
            provider: 'google',
            providerId: '113426219808381830424', // mock or real
            acceptedTerms: true,
            acceptedPrivacy: true,
            termsVersion: 'v1.2',
            privacyVersion: 'v1.1'
        });
        console.log("Response status:", res.status);
        console.log("Response data:", JSON.stringify(res.data, null, 2));
    } catch (e) {
        console.error("Error status:", e.response?.status);
        console.error("Error data:", JSON.stringify(e.response?.data, null, 2));
    }
}
test();
