module.exports = (connection, Sequelize) => {
  const User = connection.define('users',{
    firstname: {type:Sequelize.STRING},
    lastname: {type:Sequelize.STRING},
    email: {type:Sequelize.STRING},
    password: {type:Sequelize.STRING},
    state:{
      type: Sequelize.ENUM,
      values: ['activo','pendiente','eliminado']
    },
    latitud:{
      type:Sequelize.INTEGER,
      validate:{min:10,max:20}
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