const mysql = require('mysql2/promise');

(async () => {
    try {
        console.time('QueryTime');

        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'testdb'
        });

        console.log('Connected to MySQL Database!');

        const [rows, fields] = await connection.execute('SELECT * FROM users');
        console.log(rows);

        console.timeEnd('QueryTime');
        await connection.end();
    } catch (err) {
        console.error('Error:', err);
    }
})();
