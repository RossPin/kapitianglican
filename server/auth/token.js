var jwt = require('jsonwebtoken')
var verifyJwt = require('express-jwt')
require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') })

function issue (req, res) {
  if (req.body.password === process.env.PASSWORD) {
    var token = createToken(user, process.env.JWT_SECRET)
    res.json({
      message: 'Authentication successful',
      token
    })
  }
  else res.status(400).json({message: 'password is incorrect'})
}

function createToken (user, secret) {
  return jwt.sign({ 
    _id: 79845,
    username: 'Test'
  }, secret, {
    expiresIn: '14d'
  })
}

function getSecret(req, payload, done) {
  done(null, process.env.JWT_SECRET)
}

function decode (req, res, next) {
  verifyJwt({secret: getSecret})(req, res, next)
}

module.exports = {
  issue,
  createToken,
  decode,
  getSecret
}