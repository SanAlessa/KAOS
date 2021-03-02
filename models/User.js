const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  rol: String
})

const User = mongoose.model('user', userSchema)

module.exports = User