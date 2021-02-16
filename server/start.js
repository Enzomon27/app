const express = require('express')
const app = express()
const port = 3000

const sequelize = require('./db')
const Company = require('./models/Company')

app.get('/',(req,res) => {
   res.send('Hello World');
})


app.listen(port, () => {
   console.log(`Running on port ${port}`);
})

const select = async () => {
   const companies = await Company.findAll({
      attributes : ['id','name']
   });
   console.log("All companies:",JSON.stringify(companies, null,3))
}

select();
