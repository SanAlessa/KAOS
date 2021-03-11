const Clothes = require('../models/Clothes')

const clothesController = {
  addClothes: async (req, res) => {
    const {stock, sex, type, price, description, name} = req.body
    const newClothes = new Clothes({stock, sex, description, type, price, name})
    newClothes.save()
    .then(newClothes => {res.json({success: true, response: newClothes})})
    .catch(errors => res.json({
      success: false,
      errors: errors,
      message:'No se puede agregar prendas en este momento. Intente mas tarde'
    }))
  },

  getClothes: (req, res) => {
    Clothes.find()
    .then(response => res.json({success: true, response}))
    .catch(error => res.json({success: false, error}))
  },
  
  getOne: (req,res)=>{
    const id= req.params.id
    Clothes.find({_id:id})
    .then(response=>res.json({success:true, response}))
    .catch(error=>res.json({success:false,error}))
  },

  modifyClothes: async (req,res)=>{
    const {id, price, quantity, idStock, idSize} = req.body
    Clothes.findOneAndUpdate({_id:id, 'stock._id':idStock, 'size._id':idSize}),
    {$set: {price, 'stock.$.size.$.quantity':quantity}}
  },

  deleteClothes: async (req,res)=>{
    const {id} = req.body
    await Clothes.findByIdAndRemove(id, {new:true})
    .then(response=> res.json({success: true, response}))
    .catch(error => res.json({success: false, error}))
  },

  addToStock: (req, res) => {
    const {id, quantity, idStock, idSize} = req.body
    Clothes.findOneAndUpdate({_id:id, 'stock._id':idStock, 'size._id':idSize},
      {$inc: {'stock.$.size.$.quantity': +quantity}},
      {new:true})
    .then(response => res.json({success: true, response}))
    .catch(error=> res.json({success:false, error}))
  },

  substractToStock: (req,res) =>{
    const{id, quantity, idStock, idSize} = req.body
    Clothes.findOneAndUpdate({_id:id, 'stock._id':idStock, 'size._id':idSize},
      {$inc: {'stock.$.size.$.quantity': -quantity}},
      {new:true})
    .then(response => res.json({success:true, response}))
    .catch(error => res.json({success:false, error}))
  }
}
module.exports = clothesController