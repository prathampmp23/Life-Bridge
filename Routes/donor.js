const express = require("express");
const router = express.Router({ mergeParams: true });
const donor = require("../models/donor");
const wrapAsync = require("../Utils/wrapAsync");
const { saveRedirectUrl } = require("../middleware");

const donorController = require("../controllers/donors.js");

router
  .route("/filtered/search")
  .get(donorController.renderDonorDB);

module.exports = router;
