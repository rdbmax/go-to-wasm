const express = require('express')
const cors = require('cors')
const compression = require('compression')

const app = express()
app.use(cors())
app.use(compression())

const PORT = 3000

app.get('/life', (req, res) => {
  res.send('life is good')
})

app.get('/', (req, res) => {
  res.contentType('application/wasm')
  res.sendFile(`${__dirname}/go/main.wasm`)
})

app.listen(PORT, error => {
  if (error)
    console.error(error)
  else
    console.info(`❤️  Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
})
