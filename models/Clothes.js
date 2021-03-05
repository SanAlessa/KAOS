const mongoose = require('mongoose')

const clothesSchema = new mongoose.Schema({
  sex: String,
  stock: [{color: String, images:[], size:[{size: String, quantity: Number}]}],
  type: String,
  price: Number,
  description: String,
  name: String
})

const Clothes = mongoose.model('clothes', clothesSchema)

module.exports = Clothes