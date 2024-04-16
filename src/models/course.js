const db = require('../db/db');

class Course {
  static create(courseName, person_idperson) {
    return new Promise((resolve, reject) => {
      const insertQuery = `INSERT INTO course (courseName, person_idperson) VALUES (?, ?)`;
      db.run(insertQuery, [courseName, person_idperson], function(err) {
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
      const selectQuery = `SELECT * FROM course`;
      db.all(selectQuery, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  static getById(idcourse) {
    return new Promise((resolve, reject) => {
      const selectQuery = `SELECT * FROM course WHERE idcourse = ?`;
      db.get(selectQuery, [idcourse], (err, row) => {
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

module.exports = Course;
