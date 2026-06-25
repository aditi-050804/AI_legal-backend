import axios from 'axios';

async function run() {
    try {
        console.log("Fetching active session token from localhost:8080/api/stock/debug-session...");
        const sessionRes = await axios.get('http://localhost:8080/api/stock/debug-session');
        const token = sessionRes.data.token;
        if (!token) {
            console.error("No active session found in database!");
            return;
        }
        console.log("Found Active Session Token:", token.substring(0, 30) + "...");

        console.log("\nCalling /api/subscription ...");
        try {
            const subRes = await axios.get('http://localhost:8080/api/subscription', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            console.log("Response:", JSON.stringify(subRes.data, null, 2));
        } catch (err) {
            console.error("Error:", err.response ? { status: err.response.status, data: err.response.data } : err.message);
        }

        console.log("\nCalling /api/subscription/quota-status ...");
        try {
            const quotaRes = await axios.get('http://localhost:8080/api/subscription/quota-status', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            console.log("Response:", JSON.stringify(quotaRes.data, null, 2));
        } catch (err) {
            console.error("Error:", err.response ? { status: err.response.status, data: err.response.data } : err.message);
        }
    } catch (err) {
        console.error("Script execution failed:", err.message);
    }
}

run();
