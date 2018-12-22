//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/Dummy", (err, db) => {
  if (err) {
    console.log("Unable to connect with Mongo Db Server");
  }
  console.log ('Connected to MongoDB Server');

  // delete One
  // db.collection('employee_details').deleteOne({first_name : "Raj"}).then((result) => {
  //     console.log("Delete Record successfully", result);
  // });

  // delete many
    // db.collection('employee_details').deleteMany({first_name : "Raj"}).then((result) => {
    //     console.log("Delete Record successfully", result);
    //   });


  // findOne and delete
  //
  db.collection('employee_details').findOneAndDelete({_id : new ObjectID("5c17a767d30451dbf34a041e")}).then((result) => {
      console.log(JSON.stringify(result, undefined, 2);
  });

//  db.close();
});
