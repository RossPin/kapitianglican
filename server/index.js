const express = require('express')
const server = express()
const path = require('path')

server.use(express.static(path.join(__dirname, '../public')))

const PORT = 3000

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
