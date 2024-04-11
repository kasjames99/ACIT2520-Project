let database = require("../database");
let authController = require("./auth_controller")

let remindersController = {
  list: (req, res) => {
    // if (!req.session.user) {
    //   // If user is not logged in, redirect to login page
    //   return res.redirect("/login");
    // }
    console.log(req.user);
    res.render("reminder/index", { reminders: req.user.reminders })
  },

  new: (req, res) => {
    res.render("reminder/create");
  },

  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult });
    } else {
      res.render("reminder/index", { reminders: database.cindy.reminders });
    }
  },

  create: (req, res) => {
    let reminder = {
      id: database.cindy.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false,
    };
    database.cindy.reminders.push(reminder);
    res.redirect("/reminders");
  },

  edit: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    res.render("reminder/edit", { reminderItem: searchResult });
  },

  update: (req, res) => {
    // implementation here 👈
    database.cindy.reminders.forEach(reminder => {
      if (reminder.id === Number(req.params.id)) {
        reminder.title = req.body.title;
        reminder.description = req.body.description;
        reminder.completed = Boolean(req.body.completed)
      } 
    })
    res.redirect("/reminders")
  },

  delete: (req, res) => {
    let reminderToDelete = req.params.id;

    let reminderIndex = database.cindy.reminders.findIndex(function(reminder) {
      return reminder.id == reminderToDelete;
    })

    if (reminderIndex !== -1) {

      database.cindy.reminders.splice(reminderIndex, 1);
      res.redirect("/reminders");
    }
  },
};

module.exports = remindersController;
