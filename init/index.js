const mongoose = require("mongoose");
const Donor = require("../models/donor.js");
const initData = require("./data.js");

const MONGO_URL = "mongodb+srv://ashishchoudhari5002:ashish21112004@cluster0.70trs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

// const initDB = async () => {
//   await Listing.insertMany(initData.data);
//   console.log("data was initialized");
// };

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