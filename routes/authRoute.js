const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/checkAuth');
const authController = require('../controller/auth_controller');

router.get('/register', authController.register);
router.get('/login', authController.login);
router.post('/register', authController.registerSubmit);
router.post('/login', authController.loginSubmit);

module.exports = router;