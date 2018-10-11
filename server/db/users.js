var mongoose = require('mongoose')
const conn = process.env.MONGODB_URI || 'mongodb://localhost:27017/kapitiAnglican'
mongoose.connect(conn, { useNewUrlParser: true })
var hash = require('../auth/hash')

var userSchema = new mongoose.Schema({ username: String, hash: String})
var User = mongoose.model('User', userSchema)

function createUser(user) {
  return new Promise ((resolve, reject) => {
    hash.generate(user.password, (err, hash) => {
      if (err) reject(err)
      var userData = new User({username: user.username.toLowerCase(), hash})  
      userData.save()
        .then(newUser => {         
          resolve(newUser)
        })     
    })

  })
  
}

function getUserByName(username) {
  return User.find({username}).then(users => users[0])
}

function userExists(username) {
  return User.find({username}).then(users => users.length > 0)
}

module.exports = {
  createUser,
  getUserByName,
  userExists
}