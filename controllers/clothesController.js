const Clothes = require('../models/Clothes')

const clothesController = {
  addClothes: async (req, res) => {
    const {size, colour, type, price, description} = req.body
    const {image} = req.files
    const pic = image.name.split('.')
    /* REVISAR ESTO PROBABLEMENTE ESTE COMO EL OGT */
    var url = `../clothesimg/${req.user._id}${image.name}`
    image.mv(`../clothesimg/${req.user._id}${image.name}`, error => {
      if(error) {
        return res.json({
          success: false,
          error,
          mensaje:'No se puede agregar la imagen en este momento. Intente mas tarde'
        })
      }
    })
    const newClothes = new Clothes({size, description, colour, type, price, image:url})
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
  modifyClothes: async (req,res)=>{
    const {id, price, stock} = req.body
    const {image}=req.files
    /* REVISAR ESTO PROBABLEMENTE ESTE COMO EL OGT */
    var url = `../clothesimg/${req.user._id}${image.name}`
    image.mv(`../clothesimg/${req.user._id}${image.name}`, error => {
      if(error) {
        return res.json({
          success: false,
          error,
          mensaje:'No se puede agregar la imagen en este momento. Intente mas tarde'
        })
      }
    })
    /* REVISAR LO DE ARRIBA XD */
    Clothes.findOneAndUpdate({_id:id}),
    {$set: {price, image:url, 'size.$.stock':stock}}
  },
  deleteClothes: async (req,res)=>{
    const {id} = req.body
    await Clothes.findByIdAndRemove(id, {new:true})
    .then(response=> res.json({success: true, response}))
    .catch(error => res.json({success: false, error}))
  },
  addToStock: (req, res) => {
    const {id, stock} = req.body
    Clothes.findOneAndUpdate({_id:id},
      {$inc: {'size.$.stock': +stock}},
      {new:true})
    .then(response => res.json({success: true, response}))
    .catch(error=> res.json({success:false, error}))
  },
  substractToStock: (req,res) =>{
    const{id, stock} = req.body
    Clothes.findOneAndUpdate({_id:id},
      {$inc: {'size.$.stock': -stock}},
      {new:true})
    .then(response => res.json({success:true, response}))
    .catch(error => res.json({success:false, error}))
  }
}

module.exports = clothesController