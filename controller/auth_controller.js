let database = require("../database");

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  loginSubmit: (req, res) => {

  },

  registerSubmit: (req, res) => {
    // implement later
  },
};

module.exports = authController;