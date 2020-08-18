const express = require('express')
const bodyParser = require('body-parser')
const { getArticles } = require('./routes/article')

const app = express()
const port = 3001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/api/getArticles', getArticles)

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
})

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!')
})

app.listen(port, () => {
  console.log(`Blog-node listening at http://localhost:${port}`)
})
