const express = require('express')
const bodyParser = require('body-parser')
const server = express()
const users = require('./routes/users.js')
const path = require('path')

server.use(bodyParser.json())
server.use('/api/users', users)
server.use(express.static(path.join(__dirname, '../docs')))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../docs/index.html'))
})

module.exports = server