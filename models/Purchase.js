const mongoose = require('mongoose')

const purchaseSchema = new mongoose.Schema({
  user:[{type: mongoose.Schema.Types.ObjectId, ref: 'user'}],
  purchase: []
})

const Purchase = mongoose.model('purchase', purchaseSchema)

module.exports = Purchase