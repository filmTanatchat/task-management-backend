const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');
const { validateSignup } = require('../middleware/validate');

router.post('/signup', validateSignup, signup);

router.post('/login', login);

module.exports = router;