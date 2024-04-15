const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

const db = new sqlite3.Database('./mycvproject.db');




const sql = fs.readFileSync('src/db/schema.sql', 'utf8');

// Execute SQL queries
db.serialize(() => {
    db.exec(sql, (err) => {
        if (err) {
            console.error('Error executing SQL queries:', err);
        } else {
            console.log('SQL queries executed successfully');
        }
    });
});

module.exports = db;