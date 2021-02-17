const express = require('express')
const EmployeeCtrl = require('../controllers/Employee')
const router = express.Router()

router.get('/employee/:id',EmployeeCtrl.getEmployee)
router.get('/employees',EmployeeCtrl.getEmployees)
router.post('/employee',EmployeeCtrl.createEmployee)
router.put('/employee/:id',EmployeeCtrl.updateEmployee)
router.delete('/employee/:id',EmployeeCtrl.deleteEmployee)

module.exports = router
