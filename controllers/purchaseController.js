const Purchase = require('../models/Purchase')

const purchaseController= {
  newPurchase: (req, res) =>{
    const {purchase} = req.body
    const newPurchase = new Purchase({purchase, user: req.user._id})
    newPurchase.save()
    .then(async newPurchase => {
      const purchase = await newPurchase.populate('user').execPopulate()
      res.json({success: true, response: purchase})
    })
    .catch(error => res.json({success: false, error: console.log(error)}))
  }
}

module.exports=purchaseController