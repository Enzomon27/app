const express = require('express')
const CompanyCtrl = require('../controllers/Company')
const router = express.Router()

router.get('/company/:id',CompanyCtrl.getCompany)
router.get('/companies',CompanyCtrl.getCompanies)

module.exports = router
