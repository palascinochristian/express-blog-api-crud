const express = require('express')
const posts = require('./routers/posts')
const app = express()
const port = 3001

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Il mio blog')
})

app.use('/posts', posts)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})