const Person = require('../models/person');

exports.createPerson = async (req, res) => {
  const { fName, lName, Address, city, country, Email } = req.body;
  try {
    const personId = await Person.create(fName, lName, Address, city, country, Email);
    res.status(201).json({ id: personId });
  } catch (error) {
    console.error('Error creating person:', error);
    res.status(500).json({ error: 'Could not create person' });
  }
};

exports.getAllPersons = async (req, res) => {
  try {
    const persons = await Person.getAll();
    res.json(persons);
  } catch (error) {
    console.error('Error getting persons:', error);
    res.status(500).json({ error: 'Could not get persons' });
  }
};

// Implement other controller methods (update, delete) as needed
