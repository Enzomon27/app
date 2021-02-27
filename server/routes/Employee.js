const express = require('express')
const EmployeeCtrl = require('../controllers/Employee')
const router = express.Router()

router.get('/employees/:id',EmployeeCtrl.getEmployee)
router.get('/employees',EmployeeCtrl.getEmployees)
router.post('/employees',EmployeeCtrl.createEmployee)
router.put('/employees/:id',EmployeeCtrl.updateEmployee)
router.delete('/employees/:id',EmployeeCtrl.deleteEmployee)

module.exports = router
