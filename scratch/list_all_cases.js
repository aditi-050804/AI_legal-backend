import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from '../models/Project.js';

dotenv.config();

async function run() {
  try {
    await mongoose.connect('mongodb://localhost:27017/AISA');
    console.log("Connected to local DB");
    
    const cases = await Project.find({});
    console.log(`Total Cases: ${cases.length}`);
    for (const c of cases) {
      console.log("=========================================");
      console.log(`ID: ${c._id}`);
      console.log(`Title/Name: ${c.title || c.name}`);
      console.log(`Client: ${c.clientName}`);
      console.log(`Opponent: ${c.opponentName}`);
      console.log(`Summary: ${c.summary}`);
    }
  } catch (err) {
    console.error(err);
  } finally {
    await mongoose.disconnect();
  }
}
run();
