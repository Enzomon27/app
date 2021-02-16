const express = require('express')
const app = express()
const port = 3000

const companyRoute = require('./routes/Company')

app.use(express.json())

app.use('/api',companyRoute)

app.listen(port, () => {
   console.log(`Running on port ${port}`);
})
