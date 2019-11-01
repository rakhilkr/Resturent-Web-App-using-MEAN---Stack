const express = require('express');
const app = express();
const employeeRoute = express.Router();

// Employee model
let Employee = require('../models/Employee');
let Adminmenu = require('../models/Adminmenu');

// Add Employee
employeeRoute.route('/create').post((req, res, next) => {
  Employee.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Employees
employeeRoute.route('/').get((req, res) => {
  Employee.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

employeeRoute.route('/viewmenu').get((req, res) => {
  Adminmenu.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

employeeRoute.route('/readmenu/:id').get((req, res) => {
  Adminmenu.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

employeeRoute.route('/adminmenu').post((req, res, next) => {
  Adminmenu.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update adminmenu
employeeRoute.route('/updatemenu/:id').put((req, res, next) => {
  Adminmenu.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})


// Delete adminmenu
employeeRoute.route('/delete/:id').delete((req, res, next) => {
  Adminmenu.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
// Get single employee
employeeRoute.route('/read/:id').get((req, res) => {
  Employee.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

employeeRoute.route('/signin/:username/:password').get((req, res) => {
  Employee.find({$or:[{"username":req.params.username , "password":req.params.password}]} ,(error, data) => {
    if (error) {
      return next(error)
       console.log('error')
    } else {
      console.log('working')
      res.json(data)
    }
  })
})



// Update employee
employeeRoute.route('/update/:id').put((req, res, next) => {
  Employee.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete employee
employeeRoute.route('/delete/:id').delete((req, res, next) => {
  Employee.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = employeeRoute;
