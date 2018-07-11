const express = require("express");
const bodyParser = require("body-parser");
// const passport = require("passport");
// const session = require("session");
const mongoose = require("mongoose");
const routes = require("./routes");

// Auth0
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');

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


//Models
var models = require("./models");


// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/happykids"
);

// AuthO
var jwtCheck = jwt({
 // Dynamically provide a signing key
  // based on the kid in the header and 
  // the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://happy-kids.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: 'https://api.happy-kids.com',
  issuer: `https://happy-kids.auth0.com/`,
  algorithms: ['RS256']

});

app.use(jwtCheck);

app.get('/home', (req, res) => {
  res.sendFile('./client/public/index.html')
})

app.get('/authorized', function (req, res) {
  res.send('Secured Resource');
});

// GET /api/public: available for non-authenticated requests
// GET /api/private: available for authenticated requests containing an Access Token with no additional scopes
// GET /api/private-scoped: available for authenticated requests containing an Access Token with the read:messages scope granted

// This route doesn't need authentication
app.get('/api/public', function(req, res) {
  res.json({
    message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
  });
});

// This route need authentication
app.get('/api/private', jwtCheck, function(req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated to see this.'
  });
});

const checkScopes = jwtAuthz([ 'read:messages' ]);

app.get('/api/private-scoped', jwtCheck, checkScopes, function(req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
  });
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
