const express = require('express');
const router = express.Router();
const languageController = require('../controllers/languageController');

router.post('/', languageController.createLanguage);
router.get('/', languageController.getAllLanguages);

// Implement other routes (PUT, DELETE) as needed

module.exports = router;
