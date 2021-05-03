require('dotenv').config()
const express = require("express")
const app = express()
const rtMain = require('./routers/rtMain')
const rtLogin = require('./routers/rtLogin')
const port = process.env.PORT || 3000

//middlewares
app.use(express.json())

//enroutador principal
app.use("/",rtMain)
app.use("/login",rtLogin)

//base de datos
const DB = require('./models')
DB.connection.authenticate()
  .then(()=>console.log("BD mySQL arrancado"))
  .catch(err=>console.log(err))

//arrancar el servidor
app.listen(port,(err)=>{console.log(`Server run on port ${port}`)})