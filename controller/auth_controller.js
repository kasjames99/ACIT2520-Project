let database = require("../database");
const { userModel } = require("../models/userModel");

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  loginSubmit: (req, res) => {
    const { email, password } = req.body;
    const user = authController.getUserByEmailIdAndPassword(email, password);
    if (user) {
      // If user exists and password is valid, set session and redirect
      req.session.user = user;
      res.redirect("/reminders"); // Redirect to reminders page or any other page
    } else {
      // If user doesn't exist or password is invalid, redirect to login page
      res.redirect("/auth/login");
      console.log("failed")
    }
  },

  registerSubmit: (req, res) => {
    // implement later
  },
  getUserByEmailIdAndPassword: (email, password) => {
    let user = userModel.findOne(email);
    if (user) {
      if (isUserValid(user, password)) {
        return user;
      }
    }
    return null;
  },

  getUserById: (id) => {
    let user = userModel.findById(id);
    if (user) {
      return user;
    }
    return null;
  },
  
  isUserValid(user, password) {
    return user.password === password;
  }
};

module.exports = authController;