const db = require('../db/db');

class Person {
  static create(fName, lName, Address, city, country, Email) {
    return new Promise((resolve, reject) => {
      const insertQuery = `INSERT INTO person (fName, lName, Address, city, country, Email) VALUES (?, ?, ?, ?, ?, ?)`;
      db.run(insertQuery, [fName, lName, Address, city, country, Email], function(err) {
        if (err) {
          reject(err);
        } else {
          resolve(this.lastID);
        }
      });
    });
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      const selectQuery = `SELECT * FROM person`;
      db.all(selectQuery, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  // Implement other methods like update, delete as needed
}

module.exports = Person;
