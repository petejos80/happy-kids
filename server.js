const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const logger = require('morgan');
const mongoose = require("mongoose");
const routes = require("./routes");
const item = require('./routes/api/item')
const auth = require('./routes/api/auth')
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(logger('dev'));
// Add routes, both API and view
// app.use(routes);

app.use('/api/auth', auth);
app.use('/api/items', item);

app.use(function(req, res, next) {
  var err = new Error('Not Found');``
  next(err);
});



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
// var authRoute = require("./routes/api/auth.js")(app, passport);

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
