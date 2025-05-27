const express = require('express');
const router = express.Router();
const AuthController = require('../controller/auth.controller.js');

router.post('/signup', AuthController.signup);
router.post('/login', AuthController.login);

module.exports = router;
