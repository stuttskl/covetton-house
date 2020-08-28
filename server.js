const express = require("express");
let app = express();
const mongoose = require("mongoose");
let mysql = require('./api/dbcon.js');

app.use(express.static("public"))

app.get('/', (req, res) => {
  mysql.pool.query('SELECT * FROM inventory', (err, rows) => {
      if (!err) {
          // console.log(rows);
      } else {
          console.log('Error while performing query');
      }
      res.render('index', {data: rows})
  });
});


// app.get('/', (req, res) => {
//   res.render("index");
// });


app.listen(3000, () => console.log("listning on port 3000"));