const express = require('express');
const { generateAndSendOtp } = require('../controllers/otp');
const router = express.Router();

router.get('/otp', generateAndSendOtp);

module.exports = router;