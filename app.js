if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./Utils/ExpressError.js");
const wrapAsync = require("./Utils/wrapAsync.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const Donor = require("./models/donor.js")


// Require Express Router
const userRouter = require("./Routes/user.js");
const donorRouter = require("./Routes/donor.js");

// Views folder (To Serve templating files like EJS)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// URL encoded parser (Request body Parser)
app.use(express.urlencoded({ extended: true }));

// MethodOverride ( To use PUT & DELETE Request)
app.use(methodOverride("_method"));

// EJS Mate (layout)
app.engine("ejs", ejsMate);

// Public folder (Serve Static files like CSS,JS)
app.use(express.static(path.join(__dirname, "/public")));

// Mongo Atlas Database URL
const dbUrl = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));

// **Connection with MongoDB
async function main() {
  await mongoose.connect("mongodb+srv://ashishchoudhari5002:ashish21112004@cluster0.70trs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
}

// // **Session store
// const store = MongoStore.create({
//   mongoUrl: dbUrl,
//   crypto: {
//     secret: process.env.SECRET,
//   },
//   touchAfter: 24 * 3600,
// });

// store.on("error", () => {
//   console.log("Mongo Session store error", err);
// });

// **Cookie Session Option
const sessionOption = {
  // store,
  secret: process.env.SECRET || 'Mysupersecretstring',
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

// Use Session
app.use(session(sessionOption));
// use flash
app.use(flash());

// use passport methods
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

// This function determines which data of the user object should be stored in the session
passport.serializeUser(User.serializeUser());
// This function is used to retrieve the user object from the session
passport.deserializeUser(User.deserializeUser());

// Middleware to store locals used in flash() ("alerts")
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;
  next();
});

// User Router
app.use("/", userRouter);
// DONOR ROUTE
app.use("/lifeBridge", donorRouter);

// **Root route**
app.get("/", (req, res) => {
  res.render("listing/index.ejs");
});
// Index route
app.get("/lifeBridge", (req, res) => {
  res.render("listing/index.ejs");
});
// **Awarness route**
app.get("/lifeBridge/awareness", (req, res) => {
  res.render("listing/awarness.ejs");
});
// **Find location route**
app.get("/lifeBridge/filtered", async(req, res) => {
  let query = {};
  const donors= await Donor.find(query);
  res.render("listing/filtered.ejs", {donors});
});
// Route to handle search query
// app.get("/lifeBridge/findLocation/search", async (req, res) => {
//   const { bloodGroup, region, district } = req.query;
//   let query = {};

//   if (bloodGroup) query.bloodGroup = bloodGroup;
//   if (region) query.region = region;
//   if (district) query.district = district;

//   try {
//       const donors = await Donor.find(query); // Fetch donors based on search criteria
//       res.render("listing/filtered.ejs", { donors });
//   } catch (error) {
//     console.log("Received search parameters:", req.query);
//       res.status(500).send("Error searching donors");
//   }
// });

// **Organize camp route**
app.get("/lifeBridge/OrganiseCamp", (req, res) => {
  res.render("listing/filtered.ejs");
});

// **Custom ExpressError for "404" Error "page not found"
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found!"));
});

// **Error handling
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went Wrong!" } = err;
  res.status(statusCode);
  res.render("error.ejs", { message });
});

app.listen(3000, () => {
  console.log("Server is listening to port 3000.");
});