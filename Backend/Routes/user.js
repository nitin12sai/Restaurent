const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');  // Adjust the path accordingly

router.post('/user', userController);  // Adjust the route path accordingly

module.exports = router;
