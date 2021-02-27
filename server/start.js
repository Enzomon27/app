const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

const companyRoute = require('./routes/Company')
const employeeRoute = require('./routes/Employee')

app.use(express.json())
app.use(cors())

app.use('/api',companyRoute)
app.use('/api',employeeRoute)

app.listen(port, () => {
   console.log(`Running on port ${port}`);
})
