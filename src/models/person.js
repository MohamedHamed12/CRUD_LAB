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

  static getById(idperson) {
    return new Promise((resolve, reject) => {
      const selectQuery = `SELECT * FROM person WHERE idperson = ?`;
      db.get(selectQuery, [idperson], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  static getByParam(param, value) {
    return new Promise((resolve, reject) => {
      const selectQuery = `SELECT * FROM person WHERE ${param} = ?`;
      db.get(selectQuery, [value], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  static deleteById(idperson) {
    return new Promise((resolve, reject) => {
      const deleteQuery = `DELETE FROM person WHERE idperson = ?`;
      db.run(deleteQuery, [idperson], function(err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  static updateById(idperson, fName, lName, Address, city, country, Email) {
    return new Promise((resolve, reject) => {
      const updateQuery = `UPDATE person SET fName = ?, lName = ?, Address = ?, city = ?, country = ?, Email = ? WHERE idperson = ?`;
      db.run(updateQuery, [fName, lName, Address, city, country, Email, idperson], function(err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  static countParam(param, value) {
    return new Promise((resolve, reject) => {
      const countQuery = `SELECT COUNT(*) AS count FROM person WHERE ${param} = ?`;
      db.get(countQuery, [value], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row.count);
        }
      });
    });
  }
  // Implement other methods like update, delete as needed
}

module.exports = Person;
