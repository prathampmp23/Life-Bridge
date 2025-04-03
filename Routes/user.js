const express = require("express");
const router = express.Router({ mergeParams: true });
const User = require("../models/user");
const wrapAsync = require("../Utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl, isLoggedIn } = require("../middleware");

const userController = require("../controllers/users.js");

router
  .route("/signup")
  .get(userController.rendersignUpForm)
  .post(wrapAsync(userController.signUp));

router
  .route("/login")
  .get(userController.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.login
  );

  // New route for user dashboard
router.get("/lifeBridge/user/dashboard", isLoggedIn, wrapAsync(userController.renderDashboard));

router.get("/logout", userController.logout);

module.exports = router;
