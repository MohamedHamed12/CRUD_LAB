const db = require('../db');

class Site {
  static create(siteAddress, person_idperson) {
    return new Promise((resolve, reject) => {
      const insertQuery = `INSERT INTO site (siteAddress, person_idperson) VALUES (?, ?)`;
      db.run(insertQuery, [siteAddress, person_idperson], function(err) {
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
      const selectQuery = `SELECT * FROM site`;
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

module.exports = Site;
