const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController');

router.post('/', appController.createApp);
router.get('/', appController.getAllApps);

// Implement other routes (PUT, DELETE) as needed

module.exports = router;
