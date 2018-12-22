const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {employee} = require('./../server/models/employee');

// remove all documents

// employee.remove({}).then((result) => {
//   console.log(result);
// });


// find one and remove
// findByIdAndRemove

employee.findOneAndRemove('5c18c1df5c1baf2c578db2c5').then((result) => {
  console.log("Remove selected employee");
});
