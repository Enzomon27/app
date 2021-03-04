const Employee = require('../models/Employee')

const getEmployee = async (req,res) => {
   try {
      const employee = await Employee.findByPk(req.params.id)

      if(!employee) {
         return res.status(404).json({
            success: false,
            message : 'Employee not found'
         })
      }

      console.log(JSON.stringify(employee,null,3))

      return res.status(200).json(employee)

   } catch(error) {
      return res.status(400).json(employee)
   }
}

const getEmployees = async (req,res) => {
   try {
      const employees = await Employee.findAll()

      if(!employees) {
         return res.status(404).json({
            success: false,
            message : 'No companies provided'
         })
      }

      console.log(JSON.stringify(employees,null,3))

      return res.status(200).json(employees)

   } catch(error) {
      return res.status(400).json(employees)
   }
}

const createEmployee = async (req,res) => {
   if(!req.body) {
      return res.status(400).json({
         success : false,
         message: 'Must provide a employee'
      })
   }

   try {
      const employee = await Employee.create({
         name : req.body.name,
         age : req.body.age,
         company_id: req.body.company_id
      })

      if(!employee) {
         return res.status(400).json({
            success : false,
            message: 'Employee not created'
         })
      }

      return res.status(201).json({
         success: true,
         message: 'Employee inserted'
      })

   } catch(err) {
      return res.status(400).json({
         success : false,
         message: err.message
      })
   }
}

const updateEmployee = async(req,res) => {
   if(!req.body) {
      return res.status(400).json({
         success : false,
         message: 'Must provide a employee'
      })
   }
   try {
      const toUpdate = await Employee.findByPk(req.params.id)
      if(!toUpdate) {
         return res.status(404).json({
            success : false,
            message: 'Employee not found'
         })
      }

      const employee = await Employee.update({
         name : req.body.name,
         age : req.body.age,
         company_id: req.body.company_id
      },{
         where : {
            id : toUpdate.id
         }
      })

      if(!employee) {
         return res.status(400).json({
            success : false,
            message: 'Employee not updated'
         })
      }

      return res.status(201).json({
         success: true,
         message: 'Employee updated'
      })

   } catch(err) {
      return res.status(400).json({
         success : false,
         message: err.message
      })
   }

}

const deleteEmployee = async(req,res) => {

   try {
      const toDelete = await Employee.findByPk(req.params.id)
      if(!toDelete) {
         return res.status(404).json({
            success : false,
            message: 'Employee not found'
         })
      }

      const employee = await Employee.destroy({
         where : {
            id : toDelete.id
         }
      })

      if(!employee) {
         return res.status(400).json({
            success : false,
            message: 'Employee not deleted'
         })
      }

      return res.status(201).json({
         success: true,
         message: 'Employee deleted'
      })

   } catch(err) {
      return res.status(400).json({
         success : false,
         message: err.message
      })
   }
}

module.exports = {
   getEmployee,
   getEmployees,
   createEmployee,
   updateEmployee,
   deleteEmployee
}

