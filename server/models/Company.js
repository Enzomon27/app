const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const Company = sequelize.define('company', {
   name : {
      type : DataTypes.STRING,
      allowNull : false
   }
},{
   freezeTableName: true,
   tablename : 'company'
})

module.exports = Company
