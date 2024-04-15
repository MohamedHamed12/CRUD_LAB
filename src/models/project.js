const db = require('../db');

class Project {
  static create(projectName, person_idperson) {
    return new Promise((resolve, reject) => {
      const insertQuery = `INSERT INTO project (projectName, person_idperson) VALUES (?, ?)`;
      db.run(insertQuery, [projectName, person_idperson], function(err) {
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
      const selectQuery = `SELECT * FROM project`;
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

module.exports = Project;
