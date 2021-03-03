const mongoose = require('mongoose')

const purchaseSchema = new mongoose.Schema({
  user:[{type: mongoose.Schema.Types.ObjectId}],
  clothes:[{type: mongoose.Schema.Types.ObjectId}]
})

const Purchase = mongoose.model('purchase', purchaseSchema)

module.exports = Purchase