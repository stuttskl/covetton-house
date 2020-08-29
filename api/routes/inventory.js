module.exports = function () {
  let express = require('express');
  let router = express.Router();

  router.get('/getInventory', (req, res) => {
    mysql.pool.query('SELECT * FROM inventory', (err, rows) => {
      if (!err) {
          // console.log(rows);
      } else {
          console.log('Error while performing query');
      }
      res.send(rows)
    });
  });

  function searchItems(req, res, mysql, context, complete) {
    let query = 'SELECT * FROM inventory WHERE' + req.query.filter + " LIKE " + mysql.pool.escape(req.query.search + '%');
    console.log(query)
    mysql.pool.query(query, function(err, results) {
        if(err) {
            res.write(JSON.stringify(err));
            res.end();
        }
        context.items = results;
        complete();
    });
  }

  router.get('/search', (req, res) => {
    console.log('SEARCH BUTTON HIT')
    // let callbackCount = 0;
    // let context = {};
    // let mysql = req.app.get('mysql');
    // searchItems(req, res, mysql);
    // function complete() {
    //   callbackCount++;
    //   if(callbackCount >= 1) {
    //     res.send(context)
    //   }
    // }
  });
}