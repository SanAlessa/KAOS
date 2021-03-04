const mongoose = require('mongoose')

const clothesSchema = new mongoose.Schema({
  size: [{size:String, stock:Number}],
  colour: String,
  type: String,
  price: Number,
  description: String,
  image: [String]
})

const Clothes = mongoose.model('clothes', clothesSchema)

module.exports = Clothes