let mongoose = require('mongoose');
mongoose.set('debug', true);

let dotenv = require('dotenv');
dotenv.config();

// const uri = process.env.DATABASE_URL;
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true} )
//   .then(() => { console.log("mongodb connected")})
//   .catch(err => console.log(err))

// mongoose.Promise = Promise;



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:k7oqpQ7I747ZqoeI@cluster0.76jcy.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("covetton-house").collection("inventory");
  // perform actions on the collection object
  console.log('conncected!')
  client.close();
});

