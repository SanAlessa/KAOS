const Clothes = require('../models/Clothes')

const clothesController = {
  addClothes: async (req, res) => {
    const {size, colour, type, category, price, stock} = req.body
    const newClothes = new Clothes({size, colour, type, category, price, stock})
    newClothes.save()
    .then(newClothes => {
      res.json({success: true, response: newClothes})})
    .catch(errores => res.json({
      success: false,
      errores:errores,
      mensaje:'No se puede agregar prendas en este momento. Intente mas tarde'
    }))
  },
  getClothes: (req,res) => {
    Clothes.find()
    .then(response => res.json({success: true, response}))
    .catch(error => res.json({success: false, error}))
  },

  addToStock: (req, res) => {
    const {id, stock} = req.body
    Clothes.findOneAndUpdate({_id:id},
      {$inc: {stock: +stock}},
      {new:true})
    .then(response => res.json({success: true, response}))
    .catch(error=> res.json({success:false, error}))
  },
  substractToStock: (req,res) =>{
    const{id, stock} = req.body
    Clothes.findOneAndUpdate({_id:id},
    {$inc: {stock: -stock}},
    {new:true})
    .then(response => res.json({success:true, response}))
    .catch(error => res.json({success:false, error}))
  }
}

module.exports = clothesController