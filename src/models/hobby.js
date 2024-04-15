const db = require('../db/db');

class Hobby {
  static create(hobbyName, person_idperson) {
    return new Promise((resolve, reject) => {
      const insertQuery = `INSERT INTO hobby (hobbyName, person_idperson) VALUES (?, ?)`;
      db.run(insertQuery, [hobbyName, person_idperson], function(err) {
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
      const selectQuery = `SELECT * FROM hobby`;
      db.all(selectQuery, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  static getById(idhobby) {
    return new Promise((resolve, reject) => {
      const selectQuery = `SELECT * FROM hobby WHERE idhobby = ?`;
      db.get(selectQuery, [idhobby], (err, row) => {
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

module.exports = Hobby;
