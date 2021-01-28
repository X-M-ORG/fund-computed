require('./init')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static('dist'))
app.use(bodyParser.json())

require('./api')(app)

app.listen(4001, () =>
  console.log(`
  App running at:
  - Local: http://localhost:4001
`)
)
