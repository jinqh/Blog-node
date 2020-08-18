const mongoose = require('../core/mongodb')

const articleSchema = mongoose.Schema({
  title: String,
  content: String,
})

const Article = mongoose.model('Article', articleSchema)

const article1 = new Article({
  title: '文章1',
  content: '文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容'
})

article1.save(err => {
  if (err) {
    console.error(err)
  }
})

module.exports = Article
