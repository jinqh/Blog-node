const Article = require('../models/article')

const getArticles = (req, res) => {
  Article.find((err, articles) => {
    if (err) {
      return console.error(err)
    }
    res.json(articles)
  })
}

module.exports = {
  getArticles
}
