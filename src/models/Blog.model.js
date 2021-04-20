module.exports = (connection, Sequelize) => {
  const Blog = connection.define('blogs',{
    title: {type:Sequelize.STRING},
    text: {type:Sequelize.STRING},
  })
  return Blog
}