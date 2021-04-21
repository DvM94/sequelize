const Sequelize = require('sequelize');

//Conexión con BD MySQL
const URI = `mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
//const connection = new Sequelize("mysql://sequelize:1234@localhost:3306/sequelize")
const connection = new Sequelize(URI)

//Objeto que contendrá toda la estructura
let db = {}
db.Sequelize = Sequelize
db.connection = connection

//Modelos
db.user = require('./User.model.js')(connection,Sequelize)
db.article = require('./Article.model.js')(connection,Sequelize)

//Relaciones
db.user.hasMany(db.article,{
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

//Sincronización con MySQL
db.connection.sync()

module.exports = db