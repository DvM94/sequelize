//servidor
const express = require("express")
const app = express()
const rtMain = require('./routers/rtMain')
const port = process.env.PORT || 3000

//middlewares
app.use(express.json())

//enroutador principal
app.use("/",rtMain)

//arrancar el servidor
app.listen(port,(err)=>{console.log(`Server run on port ${port}`)})