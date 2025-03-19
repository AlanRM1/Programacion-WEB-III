const mysql = require('mysql2');


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'testdb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

console.time('QueryTime');
pool.query('SELECT * FROM users', (err, results, fields) => {
  if (err) throw err;
  console.log(results);
  console.timeEnd('QueryTime');
  pool.end();
});
