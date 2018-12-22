//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/Dummy", (err, db) => {
  if (err) {
    console.log("Unable to connect with Mongo Db Server");
  }
  console.log ('Connected to MongoDB Server');
db.collection('employee_details').find().toArray().then((docs) => {
  console.log("Employee Details:-");
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log("Unable to fetch employee_details", err);
});

  db.close();
});
