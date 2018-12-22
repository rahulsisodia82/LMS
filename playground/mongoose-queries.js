const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {employee} = require('./../server/models/employee');

var id = '5c18c1df5c1baf2c578db2c5';

if (ObjectId.isValid(id)) {
  return console.log('Please provide valid Id');
}

console.log('is here');
// employee.find({
//   _id: id
// }).then((emp) => {
//   console.log("employee Details:", emp);
// });
//
//
// employee.findOne({
//   _id: id
// }).then((empone) => {
//   console.log("employee Detail:", empone);
// });

employee.findById(id).then((empById) => {
  if (!empById) {
    return console.log("Please give valid Id");
  }
  console.log("employee Detail:", empById);
}).catch((e) => console.log(e));
