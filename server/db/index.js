const { Sequelize } = require('sequelize')

const connection = new Sequelize('enterprises','admin','271000', {
   host : 'localhost',
   dialect : 'mariadb',
   port : 3306
})

module.exports = connection
