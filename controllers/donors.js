const Donor = require("../models/donor");

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
