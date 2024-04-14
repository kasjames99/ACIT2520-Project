let database = require("../database");
const passport = require("passport");

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  loginSubmit: (req, res) => {
    passport.authenticate("local", {
      successRedirect: "/reminders",
      failureRedirect: "/login",
    }) (req, res )
  },

  registerSubmit: (req, res) => {
    // implement later
  },
};

module.exports = authController;