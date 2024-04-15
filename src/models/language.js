const db = require('../db');

class Language {
  static create(languageName, person_idperson) {
    return new Promise((resolve, reject) => {
      const insertQuery = `INSERT INTO language (languageName, person_idperson) VALUES (?, ?)`;
      db.run(insertQuery, [languageName, person_idperson], function(err) {
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
      const selectQuery = `SELECT * FROM language`;
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

module.exports = Language;
