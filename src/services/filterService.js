const Person = require('../models/person');
exports.countNames = async (fName) => {
  try {
    const count = await Person.getAll().then((persons) => {
      const count = persons.filter((person) => person.fName === fName).length;
      return count;
    });
    
    return count;
  } catch (error) {
    console.error("Error counting names:", error);
    throw error;
  }
};

exports.countNames2 = async (fName) => {
  try {
    const count = await Person.countParam('fName', fName).then((count) => {
      return count;
    });
    
    return count;
  } catch (error) {
    console.error("Error counting names:", error);
    throw error;
  }
};
