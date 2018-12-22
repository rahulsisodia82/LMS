//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/Dummy", (err, db) => {
  if (err) {
    console.log("Unable to connect with Mongo Db Server");
  }
  console.log ('Connected to MongoDB Server');


  db.collection('employee_details').insertOne({
    "first_name" : 'Rahul',
    "last_name" : "sisodia",
    "is_deleted": false
  }, (err, result) => {
    if (err) {
      console.log('Unbale to insert employee_details collection', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});
