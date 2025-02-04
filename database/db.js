const mysql = require('mysql2/promise');


//1. Create Connection
//2. Hente Data
//3. Stop Connection


async function fetchRute() {
    try {
        
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Skole123',
            database: 'ruter2'
        });

        const [results, fields] = await connection.execute(
            'SELECT * FROM `ticket`'
        );


        await connection.end();

        console.log(results);
        console.log(fields);
        
        
    } catch (error) {
        console.error(error);
    }

}

fetchRute();
