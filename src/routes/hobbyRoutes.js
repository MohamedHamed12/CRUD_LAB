const express = require('express');
const router = express.Router();
const hobbyController = require('../controllers/hobbyController');

router.post('/', hobbyController.createHobby);
router.get('/', hobbyController.getAllHobbies);

// Implement other routes (PUT, DELETE) as needed

module.exports = router;
