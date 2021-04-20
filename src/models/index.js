const Sequelize = require('sequelize');

const URI = `mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
//const connection = new Sequelize("mysql://sequelize:1234@localhost:3306/sequelize")
const connection = new Sequelize(URI)

let db = {}
db.Sequelize = Sequelize
db.connection = connection
db.user = require('./User.model.js')(connection,Sequelize)
db.blog = require('./Blog.model.js')(connection,Sequelize)

db.connection.sync()

module.exports = db