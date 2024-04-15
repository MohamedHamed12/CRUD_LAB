const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

router.post('/', personController.createPerson);
router.get('/', personController.getAllPersons);


// Implement other routes (PUT, DELETE) as needed

module.exports = router;
