

// homeController.js
const path = require('path');
const Person = require('../models/person');
exports.getHome = (req, res) => {
//   res.sendFile(path.join(__dirname, '..', '', 'index.html'));
    res.sendFile(path.join(__dirname, '../', 'templates', 'index.html'));

};

exports.submitForm = (req, res) => {

  // Process the form data
//    console.log(req.body);

  // Create a new person
//   const { fName, lName, Address, city, country, Email } = req.body;
//   const personId = Person.create(fName, lName, Address, city, country, Email);


  // For example, you can render the homepage with the processed data
  res.sendFile(path.join(__dirname, '../', 'templates', 'index.html'));
};
