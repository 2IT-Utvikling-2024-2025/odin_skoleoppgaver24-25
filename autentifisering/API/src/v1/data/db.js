const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Skole123',
    database: 'test_program_db',
    waitForConnections: true,
    conectionlimit: 10,
    queueLimit: 0
});

module.exports ={
    pool
}