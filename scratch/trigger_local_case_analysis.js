import jwt from 'jsonwebtoken';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

async function run() {
  try {
    const token = jwt.sign({ id: 'demo-user', email: 'test@ai-mall.in' }, process.env.JWT_SECRET);
    console.log("Generated demo token:", token);
    
    // 1. Get recent projects
    const getRes = await axios.get('http://localhost:8080/api/projects', {
      headers: { Authorization: `Bearer ${token}` }
    });
    
    console.log(`Successfully fetched projects. Count: ${getRes.data.length}`);
    if (getRes.data.length === 0) {
      console.log("No cases found in DB");
      return;
    }
    
    const activeCase = getRes.data[0];
    console.log("=========================================");
    console.log(`Active Case ID: ${activeCase._id}`);
    console.log(`Title: ${activeCase.title || activeCase.name}`);
    console.log(`Client: ${activeCase.clientName}`);
    console.log(`Opponent: ${activeCase.opponentName}`);
    console.log(`Summary before: ${activeCase.summary}`);
    
    // 2. Trigger auto-analyze
    console.log("Triggering auto-analyze...");
    const postRes = await axios.post(`http://localhost:8080/api/projects/${activeCase._id}/auto-analyze`, {}, {
      headers: { Authorization: `Bearer ${token}` }
    });
    
    console.log("Response Status:", postRes.status);
    console.log("Response Body:", JSON.stringify(postRes.data, null, 2));
  } catch (err) {
    if (err.response) {
      console.error("HTTP Error Status:", err.response.status);
      console.error("HTTP Error Body:", err.response.data);
    } else {
      console.error("Error:", err.message);
    }
  }
}
run();
