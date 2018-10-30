var jwt = require('jsonwebtoken')
var {getUserByName} = require('../db/users')
var verifyJwt = require('express-jwt')
var {compare} = require('./hash')

function issue (req, res) {
  getUserByName(req.body.username.toLowerCase())
    .then(user => {
      compare(req.body.password, user.hash, (err, match) => {
        if (err) res.status(500).send({message: err.message})
        else if (!match) res.status(400).send({message: 'password is incorrect'})
        else {
          var token = createToken(user, process.env.JWT_SECRET)
          res.json({
            message: 'Authentication successful',
            token
          })
        }
      })
    })
    .catch(err => res.status(400).send({message: err.message}))
}

function createToken (user, secret) {
  return jwt.sign({ 
    _id: user._id,
    username: user.username
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
