const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');

router.post('/', siteController.createSite);
router.get('/', siteController.getAllSites);

// Implement other routes (PUT, DELETE) as needed

module.exports = router;
