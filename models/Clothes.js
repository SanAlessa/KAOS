const mongoose = require('mongoose')

const clothesSchema = new mongoose.Schema({
  sex: String,
  stock:{color: String, images:[], size: [{quantity: Number, size: String}]},
  clothName: String,
  type: String,
  price: Number,
  description: String,
})

const Clothes = mongoose.model('clothes', clothesSchema)

module.exports = Clothes