const db = require('../db');

class App {
  static create(appName, person_idperson) {
    return new Promise((resolve, reject) => {
      const insertQuery = `INSERT INTO app (appName, person_idperson) VALUES (?, ?)`;
      db.run(insertQuery, [appName, person_idperson], function(err) {
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
      const selectQuery = `SELECT * FROM app`;
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

module.exports = App;
