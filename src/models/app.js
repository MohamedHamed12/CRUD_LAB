const db = require('../db/db');

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

  static getById(idapp) {
    return new Promise((resolve, reject) => {
      const selectQuery = `SELECT * FROM app WHERE idapp = ?`;
      db.get(selectQuery, [idapp], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  // Implement other methods like update, delete as needed
}

module.exports = App;
