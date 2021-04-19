const express = require("express")
const rtMain = express.Router()

//Rutas
rtMain.get("/",function(req,res){
  res.json('ok')
})

module.exports=rtMain