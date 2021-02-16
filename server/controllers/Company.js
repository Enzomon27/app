const Company = require('../models/Company')

const getCompany = async (req,res) => {
   try {
      const company = await Company.findByPk(req.params.id)

      if(!company) {
         return res.status(404).json({
            success: false,
            message : 'Company not found'
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
      const companies = await Company.findAll()

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

module.exports = {
   getCompany,
   getCompanies
}
