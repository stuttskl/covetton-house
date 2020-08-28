const express = require("express");
let app = express();
const mongoose = require("mongoose");

app.use(express.static("public"))


app.get('/', (req, res) => {
  res.render("index");
});


app.listen(3000, () => console.log("listning on port 3000"));