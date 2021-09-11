const express = require('express');
const router = express.Router();

const sendMail = require('../controllers/mail.controller');

router.post("", sendMail.mail)

module.exports = router;