const express = require('express')
const CompanyCtrl = require('../controllers/Company')
const router = express.Router()

router.get('/company/:id',CompanyCtrl.getCompany)
router.get('/companies',CompanyCtrl.getCompanies)
router.post('/company',CompanyCtrl.createCompany)
router.put('/company/:id',CompanyCtrl.updateCompany)
router.delete('/company/:id',CompanyCtrl.deleteCompany)

module.exports = router
