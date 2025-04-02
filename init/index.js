const mongoose = require("mongoose");
const Donor = require("../models/donor.js");
const initData = require("./data.js");

const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/lifeBridge"; // Fallback to local DB

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL); // Removed deprecated options
}

const initDB = async () => {
  try {
      await Donor.deleteMany({}); // Clear existing donors
      await Donor.insertMany(initData.data); // Insert donor data
      console.log("✅ Donor data initialized successfully");
  } catch (error) {
      console.error(" Error initializing donor data:", error);
  }
};

initDB();