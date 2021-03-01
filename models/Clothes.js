const mongoose = require('mongoose')

const clothesSchema = new mongoose.Schema({
  size: String,
  colour: String,
  cloth: String,
  price: Number,
  stock: Number
})

const Clothes = mongoose.model('clothes', clothesSchema)

module.exports = Clothes