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
    let userId = req.user.id;
  
    let user = database.find(user => user.id === userId);
  
    if (user) {
      let searchResult = user.reminders.find(reminder => reminder.id == req.params.id);
      
      res.render("reminder/single-reminder", { reminderItem: searchResult });
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
    let userId = req.user.id;
  
    // Find the user in the database
    let user = database.find(user => user.id === userId);
  
    // Check if the user is found
    if (user) {
      // Find the reminder with the specified ID in the user's reminders
      let reminderToEdit = user.reminders.find(reminder => reminder.id == req.params.id);
  
      // Check if the reminder to edit is found
      if (reminderToEdit) {
        // If the reminder is found, render the edit page with the reminder data
        res.render("reminder/edit", { reminderItem: reminderToEdit });
      } else {
        // If the reminder is not found, render an error page or redirect to a different route
        res.status(404).send("Reminder not found");
      }
    } else {
      // If the user is not found, render an error page or redirect to a different route
      res.status(404).send("User not found");
    }
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
  let userId = req.user.id;

  let user = database.find(user => user.id === userId);

  if (user) {
    let reminderIndex = user.reminders.findIndex(reminder => reminder.id == req.params.id);

    if (reminderIndex !== -1) {
      user.reminders.splice(reminderIndex, 1);

      res.redirect("/reminders");
    }
  }
  //I beleive this is deleting the reminder, but isn't stopping it from showing up in the current session when populating
  //all reminders
},
};

module.exports = remindersController;