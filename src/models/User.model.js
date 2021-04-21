module.exports = (connection, Sequelize) => {
  const User = connection.define('users',{
    firstname: {type:Sequelize.STRING},
    lastname: {type:Sequelize.STRING},
    email: {type:Sequelize.STRING},
    password: {type:Sequelize.STRING},
    states:{
      type: Sequelize.ENUM,
      values: ['activo','pendiente','eliminado']
    }
  },{
    indexes:[
      { unique: true,
      fields:['email']
    }],
    timestamps: false
  })
  return User
}