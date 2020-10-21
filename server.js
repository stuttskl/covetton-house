const express = require("express");
let app = express();
let mysql = require('./api/dbcon.js');
const DEFAULT_PORT = process.env.PORT || 3000; // Heroku uses a dynamic port. 
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

app.get('/locations', (req, res) => {
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

// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname, './public/index.html'), function(err) {
//       if (err) {
//         res.status(500).send(err)
//       }
//     });
//   });


app.listen(DEFAULT_PORT, () => console.log("listning on port:", DEFAULT_PORT));