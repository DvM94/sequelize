require('dotenv').config()
const express = require("express")
const app = express()
const rtMain = require('./routers/rtMain')
const port = process.env.PORT || 3000
const DB = require('./models/index')

//middlewares
app.use(express.json())

//enroutador principal
app.use("/",rtMain)

//base de datos
DB.authenticate()
  .then(()=>console.log("BD mySQL arrancado"))
  .catch(err=>console.log(err))

//arrancar el servidor
app.listen(port,(err)=>{console.log(`Server run on port ${port}`)})