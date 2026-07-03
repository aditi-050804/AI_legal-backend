import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from '../models/Project.js';
import dns from 'dns';

dns.setServers(['8.8.8.8', '8.8.4.4']);
dns.setDefaultResultOrder('ipv4first');

dotenv.config();

async function run() {
  try {
    const uri = process.env.MONGODB_ATLAS_URI || 'mongodb+srv://admin_db_user:ailegal050804@cluster0.265idhx.mongodb.net/AISA?appName=Cluster0';
    console.log("Connecting to:", uri);
    await mongoose.connect(uri);
    console.log("Connected to Atlas DB");
    
    // Find active cases
    const cases = await Project.find({}).sort({ updatedAt: -1 }).limit(5);
    console.log(`Found ${cases.length} recent cases.`);
    for (const c of cases) {
      console.log("=========================================");
      console.log(`ID: ${c._id}`);
      console.log(`Title/Name: ${c.title || c.name}`);
      console.log(`Client: ${c.clientName}`);
      console.log(`Opponent: ${c.opponentName}`);
      console.log(`Summary: ${c.summary}`);
      console.log(`Description: ${c.description}`);
    }
  } catch (err) {
    console.error(err);
  } finally {
    await mongoose.disconnect();
  }
}
run();
