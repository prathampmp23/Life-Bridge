const express = require("express");
const router = express.Router({ mergeParams: true });
const donor = require("../models/donor");
const wrapAsync = require("../Utils/wrapAsync");
const { isLoggedIn } = require("../middleware");

const donorController = require("../controllers/donors.js");

router
  .route("/filtered/search")
  .get(isLoggedIn, donorController.renderDonorDB);

router
  .route("/upcommingCamp")
  .get(isLoggedIn, donorController.renderCampForm)
  .post(wrapAsync(donorController.addCamp));

module.exports = router;
