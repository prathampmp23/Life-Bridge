const User = require("../models/user");
const Camp = require("../models/camp");

module.exports.rendersignUpForm = (req, res) => {
  res.render("users/signup.ejs");
};

module.exports.signUp = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registerUser = await User.register(newUser, password);
    console.log(registerUser);
    // automatically logged in when user signUp
    req.login(registerUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Welcome to LifeBridge!");
      res.redirect("/lifeBridge");
    });
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/signup");
  }
};

module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};

module.exports.login = async (req, res) => {
  req.flash("success", "Welcome back to LifeBridge!");
  // Changed the redirect URL to the dashboard
  let redirectUrl = res.locals.redirectUrl || "/lifeBridge/user/dashboard";
  res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You are logged out!");
    res.redirect("/lifeBridge");
  });
};

// New controller for user dashboard
module.exports.renderDashboard = async (req, res) => {
  try {
    // Get user data
    const userData = await User.findById(req.user._id);
    
    // Get upcoming camps
    const currentDate = new Date().toISOString().split("T")[0];
    const upcomingCamps = await Camp.find({ date: { $gte: currentDate } }).sort({ date: 1 });
    
    // In a real app, you would fetch donation history
    // For now, we'll pass an empty array
    const donations = [];
    
    // Render the dashboard with data
    res.render("users/dashboard", {
      userData,
      upcomingCamps,
      donations
    });
  } catch (error) {
    console.error("Error loading dashboard:", error);
    req.flash("error", "Error loading dashboard");
    res.redirect("/lifeBridge");
  }
};