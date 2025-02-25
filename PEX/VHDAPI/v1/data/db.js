const mysql = require('mysql/promise');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Skole123',
    database: 'vhd',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;
