const db = require('../models')

const userController = {}

userController.create = (req, res) => {
  db.user.create(req.body)
    .then(data => res.json(data))
}

userController.find = (req, res) => {
  db.user.findAll({ include: db.article })
    .then(data => res.json(data))
}

module.exports = userController