const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  rol: {type: String, default: 'nonadmin'}
})

const User = mongoose.model('user', userSchema)

module.exports = User