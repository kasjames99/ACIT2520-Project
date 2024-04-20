const express = require("express");
const session = require("express-session");
const app = express();
const path = require("path");
const ejsLayouts = require("express-ejs-layouts");
const reminderController = require("./controller/reminder_controller");
const authController = require("./controller/auth_controller");
const middleware = require("./middleware/checkAuth")
const passport = require("./middleware/passport");
const adminController = require("./controller/admin_controller")

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));

app.use(ejsLayouts);

app.set("view engine", "ejs");

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes start here
app.get("/reminders", middleware.ensureAuthenticated, reminderController.list);
app.get("/reminder/new", middleware.ensureAuthenticated,reminderController.new);
app.get("/reminder/:id", middleware.ensureAuthenticated,reminderController.listOne);
app.get("/reminder/:id/edit", middleware.ensureAuthenticated,reminderController.edit);
app.post("/reminder/", middleware.ensureAuthenticated,reminderController.create);
// ⭐ Implement these two routes below!
app.post("/reminder/update/:id", middleware.ensureAuthenticated,reminderController.update);
app.post("/reminder/delete/:id", middleware.ensureAuthenticated,reminderController.delete);

// 👌 Ignore for now
app.get("/register", middleware.forwardAuthenticated, authController.register);
app.get("/auth/login", middleware.forwardAuthenticated,authController.login);
app.post("/register", middleware.forwardAuthenticated,authController.registerSubmit);
app.post("/auth/login", middleware.forwardAuthenticated,authController.loginSubmit);

app.get("/admin", middleware.checkAdminAuth, adminController.list);
app.post("/admin", middleware.checkAdminAuth, adminController.delete);

app.listen(3001, function () {
  console.log(
    "Server running. Visit: http://localhost:3001/reminders in your browser 🚀"
  );
});
