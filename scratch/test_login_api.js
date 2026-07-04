import axios from 'axios';

async function test() {
    try {
        console.log("1. Attempting login without accepted terms...");
        await axios.post('http://localhost:8080/api/auth/login', {
            email: 'yugamcteam@gmail.com',
            password: 'Password123!'
        });
        console.log("FAIL: Login succeeded but should have failed with 403.");
    } catch (e) {
        console.log("Success (expected 403):", e.response?.status, e.response?.data?.code);
    }

    try {
        console.log("2. Attempting login WITH accepted terms...");
        const res = await axios.post('http://localhost:8080/api/auth/login', {
            email: 'yugamcteam@gmail.com',
            password: 'Password123!',
            acceptedTerms: true,
            acceptedPrivacy: true,
            termsVersion: 'v1.2',
            privacyVersion: 'v1.1'
        });
        console.log("Success (expected 200):", res.status);
        console.log("Response data:", JSON.stringify(res.data, null, 2));
    } catch (e) {
        console.error("FAIL (expected 200):", e.response?.status);
        console.error("Error data:", JSON.stringify(e.response?.data, null, 2));
    }
}
test();
