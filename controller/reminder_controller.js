let database = require("../database");
let authController = require("./auth_controller")

let remindersController = {
  list: (req, res) => {
    console.log(req.user);
    res.render("reminder/index", { reminders: req.user.reminders, name: req.user.name });
  },

  new: (req, res) => {
    res.render("reminder/create");
  },

  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = req.user.reminders.find(function(reminder) {
      return reminder.id == reminderToFind;
    });
      res.render("reminder/single-reminder", { reminderItem: searchResult });
  },

  create: (req, res) => {
    let reminder = {
      id: req.user.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false,
    };
    req.user.reminders.push(reminder);
    res.redirect("/reminders");
  },

  edit: (req, res) => {
    let reminderid = req.params.id;
    let searchResult = req.user.reminders.find(function (reminder) {
      return reminder.id == reminderid;
    });
    res.render("reminder/edit", { reminderItem: searchResult});
  },

  update: (req, res) => {
    let reminder = {
      id: parseInt(req.params.id),
      title: req.body.title,
      description: req.body.description,
      completed: JSON.parse(req.body.completed),
    };
    let reminderToFind = req.params.id;

    indexOfReminder = req.user.reminders.findIndex(function(reminder) {
      return reminder.id == reminderToFind
    });

    req.user.reminders[indexOfReminder] = reminder

    res.redirect("/reminders")
  },

  delete: (req, res) => {
  let reminderID = req.params.id;

  reminderIndex = req.user.reminders.findIndex(function(reminder) {
    return reminder.id == reminderID
  });
      req.user.reminders.splice(reminderIndex,1)
      res.redirect("/reminders");

},
};

module.exports = remindersController;
