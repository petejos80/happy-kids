const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// // For Passport
// app.use(
//   session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
// ); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions

// app.get("/", function(req, res) {
//   res.send("Welcome to Passport with Sequelize");
// });

//Models
var models = require("./models");

//Routes
var authRoute = require("./routes/auth.js")(app, passport);

// //load passport strategies
// require("./config/passport/passport.js")(passport, models.user);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/happykids"
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
