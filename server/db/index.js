const { Sequelize } = require('sequelize')

// Object connection
const sequelize = new Sequelize('enterprises','admin','271000', {
   host : 'localhost',
   dialect : 'mariadb',
   port : 3306
})

// Connecting to the database
const makeConnection = async () => {
   try {
      await sequelize.authenticate()
   } catch(err) {
      console.error('Unable to connect to the database', err.message)
   }
}

module.exports = {
   makeConnection
}
