const mysql = require('mysql2');

console.time('QueryTime');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testdb'
});

connection.connect((err) => {
    if(err) throw err;
    console.log('Connected to MySQL Database!');

    connection.query('SELECT * FROM users', (err, result, fields) => {
        if(err) throw err;
        console.log(result);
        console.timeEnd('QueryTime');
    });

    connection.end();
});
