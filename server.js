const express = require("express");
let app = express();
let mysql = require('./api/dbcon.js');

app.use(express.static("public"))

app.get('/getInventory', (req, res) => {
  mysql.pool.query('SELECT * FROM inventory', (err, rows) => {
      if (!err) {
          // console.log(rows);
      } else {
          console.log('Error while performing query');
      }
      res.send(rows)
  });
});

app.get('/getLocations', (req, res) => {
    mysql.pool.query('SELECT * FROM locations', (err, rows) => {
        if (!err) {
            // console.log(rows);
        } else {
            console.log('Error while performing query');
        }
        res.send(rows)
    });
});

// app.use('/inventory', require('./api/routes/inventory'));

app.use((req, res) => {
    res.status(404);
});

app.use((err, req, res, next) => {
    console.err(err.stack);
    res.type('plain/text');
    res.status(500);
});

// app.get('/', (req, res) => {
//   res.render("index");
// });


app.listen(3000, () => console.log("listning on port 3000"));