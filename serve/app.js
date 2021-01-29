require('./init')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static('dist'))
app.use(bodyParser.json())

require('./api')(app)
require('./utils').runServe(app, 4000)
