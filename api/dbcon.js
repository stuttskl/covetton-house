let dotenv = require('dotenv');
dotenv.config();

let mysql = require('mysql');

// let pool = mysql.createConnection({
//   host: process.env.DATABASE_HOST,
//   user: process.env.DATABASE_USER,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE
// });

let pool = mysql.createConnection({
  host: process.env.CLEAR_DATABASE_HOST,
  user: process.env.CLEAR_DATABASE_USER,
  password: process.env.CLEAR_DATABASE_PASSWORD,
  database: process.env.CLEAR_DATABASE_NAME
});

pool.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
});

module.exports.pool = pool;