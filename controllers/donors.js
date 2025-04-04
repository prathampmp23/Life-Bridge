const Donor = require("../models/donor");
const Camp = require("../models/camp");

module.exports.renderDonorDB = async (req, res) => {
  const { bloodGroup, region, district } = req.query;
  let query = {};

  if (bloodGroup) query.bloodGroup = bloodGroup;
  if (region) query.region = region;
  if (district) query.district = district;

  try {
    const donors = await Donor.find(query); // Fetch donors based on search criteria
    res.render("./listing/filtered", { donors });
  } catch (error) {
    console.log("Received search parameters:", req.query);
    res.status(500).send("Error searching donors");
  }
};


module.exports.renderCampForm = async (req, res) => {
  try {
    const allCamps = await Camp.find(); // Fetch all camps from the database
    res.render("listing/camp.ejs", { allCamps }); // Pass allCamps to EJS
  } catch (error) {
    console.error("Error while fetching camps:", error);
    res.status(500).send("Error loading camps");
  }
};


module.exports.addCamp = async (req, res) => {
  try {
    let { name, place, date, time } = req.body;
    const newCamp = new Camp({ name, place, date, time });
    const registerCamp = await newCamp.save();
    console.log(registerCamp);
    const allCamps = await Camp.find();
    console.log(allCamps);
    req.flash("success", "Your Upcoming Camp Added Successfully!");
    res.redirect("/lifeBridge/upcomingCamp");
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/lifeBridge/upcomingCamp");
  }
};

module.exports.renderCommunity = async (req, res) => {
  try {
    res.render("listing/community.ejs"); // Pass allCamps to EJS
  } catch (error) {
    console.error("Error while fetching community:", error);
    res.status(500).send("Error loading camps");
  }
};