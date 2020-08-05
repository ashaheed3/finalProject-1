//this file offers a set of routes for sending users to the various html pages if the user is an authenticated user or if the user needs to sign up 

// Dependencies

var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

//Routes
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to

  // index route loads index.html
  app.get("/", function(req, res) {
     // If the user already has an account send them to the index(signup/login) page
    if (req.user) {
      res.redirect("/profile.html");
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // 
  app.get("/login", function(req, res) {
    // If the user already has an account send them to the index(signup/login) page
    if (req.user) {
      res.redirect("/profile.html");
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // 
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/profile.html", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });
};