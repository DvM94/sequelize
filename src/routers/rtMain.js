const express = require("express")
const rtMain = express.Router()
const userController = require('../controller/users.controller')

//Rutas
rtMain.get("/",function(req,res){
  res.json('ok')
})

rtMain.post('/create', userController.create)
rtMain.get('/find', userController.find)

module.exports=rtMain