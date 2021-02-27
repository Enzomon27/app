const EmployeeCtrl = require('../models/Company')

const getCompany = async (req,res) => {
   try {
      const company = await EmployeeCtrl.findByPk(req.params.id)

      if(!company) {
         return res.status(404).json({
            success: false, message : 'Company not found'
         })
      }

      console.log(JSON.stringify(company,null,3))

      return res.status(200).json({
         success : true,
         company : company
      })

   } catch(error) {
      return res.status(400).json({
         success : false,
         message: err.message
      })
   }
}

const getCompanies = async (req,res) => {
   try {
      const companies = await EmployeeCtrl.findAll()

      if(!companies) {
         return res.status(404).json({
            success: false,
            message : 'No companies provided'
         })
      }

      console.log(JSON.stringify(companies,null,3))

      return res.status(200).json({
         success : true,
         companies : companies
      })

   } catch(error) {
      return res.status(400).json({
         success : false,
         message: err.message
      })
   }
}

const createCompany = async (req,res) => {
   if(!req.body) {
      return res.status(204).json({
         success : false,
         message: 'Must provide a company'
      })
   }

   try {
      const company = await EmployeeCtrl.create({
         name : req.body.name
      })

      if(!company) {
         return res.status(400).json({
            success : false,
            message: 'Company not created'
         })
      }

      return res.status(201).json({
         success: true,
         message: 'Company inserted'
      })

   } catch(err) {
      return res.status(400).json({
         success : false,
         message: err.message
      })
   }
}

const updateCompany = async(req,res) => {
   if(!req.body) {
      return res.status(204).json({
         success : false,
         message: 'Must provide a company'
      })
   }
   try {
      const toUpdate = await EmployeeCtrl.findByPk(req.params.id)
      if(!toUpdate) {
         return res.status(404).json({
            success : false,
            message: 'Company not found'
         })
      }

      const company = await EmployeeCtrl.update({
         name : req.body.name
      },{
         where : {
            id : toUpdate.id
         }
      })

      if(!company) {
         return res.status(400).json({
            success : false,
            message: 'Company not updated'
         })
      }

      return res.status(201).json({
         success: true,
         message: 'Company updated'
      })

   } catch(err) {
      return res.status(400).json({
         success : false,
         message: err.message
      })
   }

}

const deleteCompany = async(req,res) => {

   try {
      const toDelete = await EmployeeCtrl.findByPk(req.params.id)
      if(!toDelete) {
         return res.status(404).json({
            success : false,
            message: 'Company not found'
         })
      }

      const company = await EmployeeCtrl.destroy({
         where : {
            id : toDelete.id
         }
      })

      if(!company) {
         return res.status(400).json({
            success : false,
            message: 'Company not deleted'
         })
      }

      return res.status(201).json({
         success: true,
         message: 'Company deleted'
      })

   } catch(err) {
      return res.status(400).json({
         success : false,
         message: err.message
      })
   }
}

module.exports = {
   getCompany,
   getCompanies,
   createCompany,
   updateCompany,
   deleteCompany
}
