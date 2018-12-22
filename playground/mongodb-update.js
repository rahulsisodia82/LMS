//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/Dummy", (err, db) => {
  if (err) {
    console.log("Unable to connect with Mongo Db Server");
  }
  console.log ('Connected to MongoDB Server');

  db.collection('employee_details').findOneAndUpdate({
    _id: new ObjectID("5c17aa42d30451dbf34a04d2")
  }, {
    $set: {
      is_deleted: true
    }
  },{
    returnOriginal:false
}).then((result) => {
  console.log(result);
});
//  db.close();
});
