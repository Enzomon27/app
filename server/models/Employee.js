const { DataTypes } = require('sequelize')
const Company = require('./Company')
const sequelize = require('../db')

const Employee = sequelize.define('employee', {
   name : {
      type : DataTypes.STRING,
      allowNull : false
   },
   age : {
      type : DataTypes.INTEGER,
      allowNull : false
   }
},{
   freezeTableName: true,
   tablename : 'employee'
})

Employee.belongsTo(Company, {
   onDelete : 'CASCADE',
   onUpdate : 'RESTRICT',
   foreignKey: {
      name : 'company_id',
      allowNull : false,
   }
})

module.exports = Employee
