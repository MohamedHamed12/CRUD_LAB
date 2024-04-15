const db = require('../db');

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

  // Implement other methods like update, delete as needed
}

module.exports = Course;
