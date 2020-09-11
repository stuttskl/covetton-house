let dotenv = require('dotenv');
dotenv.config();

let mysql = require('mysql');

let pool = mysql.createConnection({
  HOST: "us-cdbr-east-02.cleardb.com",
  USER: "b3c748fa70f92b",
  PASSWORD: "b8571cfc",
  DB: "heroku_dcebc5285cd0a08"
  // host: process.env.DATABASE_HOST,
  // user: process.env.DATABASE_USER,
  // password: process.env.DATABASE_PASSWORD,
  // database: process.env.DATABASE
});

pool.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
});

module.exports.pool = pool;

// mysql://b3c748fa70f92b:b8571cfc@us-cdbr-east-02.cleardb.com/heroku_dcebc5285cd0a08?reconnect=true