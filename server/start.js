const express = require('express')
const app = express()
const mariadb = require('mariadb')
const port = 3000


app.get('/',(req,res) => {
   res.send('Hello World');
})

app.listen(port, () => {
   console.log(`Running on port ${port}`);
})
