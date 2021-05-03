const express = require("express")
const rtLogin = express.Router()
const fbFunctions = require("../modules/firebase")

rtLogin.post('/signup', (req,res) => {
  fbFunctions.signup(req.body.email, req.body.password)
    .then(data => res.json(data))
})

rtLogin.post('/signin', (req,res) => {
  fbFunctions.signin(req.body.email, req.body.password)
    .then(data => res.json(data))
})

rtLogin.post('/signout', (req,res) => {
  fbFunctions.signout()
    .then(data => res.json(data))
})

rtLogin.get('/get-current-user', (req,res) => {
  fbFunctions.getCurrentUser()
    .then(data => res.json(data))
})

module.exports = rtLogin