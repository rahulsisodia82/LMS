const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectId} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {employee} = require('./models/employee');
var app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3002;

var data = {
  "status" : "error",
  "message" : null
}

app.post('/employee', (req, res) => {
  var empObj = new employee({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email_id: req.body.email_id,
    mobile_no: req.body.mobile_no,
    password: req.body.password
  });
  empObj.save().then((doc) => {
    var data = {
      "status" : "success",
      "message" : "Employee sign up successfully",
      "data" : doc
    }
    res.send(data);
  },(e) => {
    res.status(400).send(e);
  });
});

// Get all employee_details

app.get('/employee', (req, res) => {
    employee.find().then((emp) => {
      var data = {
        "status" : "success",
        "message" : "Employee Details data",
        "data" : emp
      }
      res.send(data);
    }, (e) => {
        res.status(400).send(e);
    });
});

// get value by id

app.get('/employee/:id',(req, res) => {
  var id = req.params.id;
  if (!ObjectId.isValid(id)) {
    data.message = 'Please provide valid Id';
    return res.status(404).send(data);
  }
  employee.findById(id).then((emp) => {
    if (!emp) {
      data.message = 'Please provide valid Id';
      data.data = null;
      return res.status(404).send(data);
    }
    data.status = "success";
    data.message = "Employee Details data";
    data.data = emp;
    res.send(data);
  }).catch((e) => {
    res.status(400).send();
  });
});

// remove employee_details

app.delete('/employee/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectId.isValid(id)) {
      data.message = 'Please provide valid Id';
      return res.status(404).send(data);
    }
    employee.findByIdAndRemove(id).then((result) => {
      if (!result) {
        data.message = 'Please provide valid Id';
        data.data = null;
        return res.status(404).send(data);
      }
      data.status = "success";
      data.message = "Employee Details Removed";
      data.data = result;
      res.send(data);
    }).catch((e) => {
      res.status(400).send();
    });
});

// update employee_details

app.patch('/employee/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['first_name','last_name','email_id','mobile_no','password']);
  if (!ObjectId.isValid(id)) {
    data.message = 'Please provide valid Id';
    return res.status(404).send(data);
  }
employee.findByIdAndUpdate(id, {$set: body}, {new: true}).then((result) => {
  if (!result) {
    data.message = 'Please provide valid Id';
    data.data = null;
    return res.status(404).send(data);
  }
  data.status = "success";
  data.message = "Employee Details updated";
  data.data = result;
  res.send(data);
}).catch((e) => {
    res.status(400).send();
});
});

app.listen(port, () => {
  console.log(`Started up at ${port}`);
});
