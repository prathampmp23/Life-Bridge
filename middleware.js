const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const ExpressError = require("./Utils/ExpressError.js");

// **To check is User is loggedIn or not 
module.exports.isLoggedIn = (req, res, next) => {
  console.log(req.user);
  // If user is not signUp and logged in
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You must be logged in");
    return res.redirect("/login");
  }
  next();
};

// **To save user redirectUrl (path) 
module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};
