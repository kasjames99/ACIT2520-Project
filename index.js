const express = require('express');
const session = require('express-session');
const passport = require('passport');
const app = express();
const path = require('path');
const ejsLayouts = require('express-ejs-layouts');
const authRoute = require('./routes/authRoute');
const indexRoute = require('./routes/indexRoute');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.set('view engine', 'ejs');
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Use routes
app.use('/', indexRoute);
app.use('/auth', authRoute);

app.listen(3001, () => {
  console.log('Server running. Visit: http://localhost:3001/reminders in your browser 🚀');
});