const express = require('express')
const CompanyCtrl = require('../controllers/Company')
const router = express.Router()

router.get('/companies/:id',CompanyCtrl.getCompany)
router.get('/companies',CompanyCtrl.getCompanies)
router.post('/companies',CompanyCtrl.createCompany)
router.put('/companies/:id',CompanyCtrl.updateCompany)
router.delete('/companies/:id',CompanyCtrl.deleteCompany)

module.exports = router
