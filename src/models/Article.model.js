module.exports = (connection, Sequelize) => {
  const Article = connection.define('articles',{
    title: {type:Sequelize.STRING},
    text: {type:Sequelize.STRING},
    states:{
      type: Sequelize.ENUM,
      values: ['publicado','pendiente','eliminado']
    }
  },{
    timestamps: false
})
  return Article
}