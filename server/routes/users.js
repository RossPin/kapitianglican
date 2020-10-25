const router = require('express').Router()
const token = require('../auth/token')

router.post('/login', token.issue)

module.exports = router