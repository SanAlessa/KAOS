const Purchase = require('../models/Purchase')

const purchaseController= {
  newPurchase: (req, res) =>{
    const newPurchase = new Purchase({purchase: req.body, user: req.user._id})
    newPurchase.save()
    .then(async newPurchase => {
      const purchase = await newPurchase.populate('user').execPopulate()
      res.json({success: true, response: purchase})
    })
    .catch(error => res.json({success: false, error}))
  },
  getPurchases: (req,res)=> {
    console.log(req.body.id)
    Purchase.find({'user': req.body.id})
    .then(response => res.json({success: true, response}))
    .catch(error => res.json({success: false, error}))
  }
}

module.exports=purchaseController