const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const clothesController = require('../controllers/clothesController')
const passwordController= require('../controllers/passwordController')
const validator = require ('../controllers/validator')
const passport = require('passport')
const purchaseController = require('../controllers/purchaseController')
require('../config/passport')

router.route('/users')
.get(userController.find)

router.route('/user/signup')
.post(validator.validateNewAccount, userController.signUp)


router.route('/user/signin')
.post(userController.signIn)

router.route("/user/reset-password")
.post(passwordController.restartPassword)
.put(passwordController.changePassword)

router.route('/user/ls')
.post(passport.authenticate('jwt', {session: false}), userController.logFromLS)

router.route('/clothes/addClothes')
.post(clothesController.addClothes)

router.route('/clothes/getClothes')
.get(clothesController.getClothes)

router.route('/clothes/getOne/:id')
.get(clothesController.getOne)

router.route('/clothes/addStock')
.post(clothesController.addToStock)

router.route('/clothes/substractStock')
.post(clothesController.substractToStock)

router.route('/clothes/deleteClothes')
.put(clothesController.deleteClothes)

router.route('/clothes/modifyClothes')
.post(clothesController.modifyClothes)

router.route('/purchase')
.post(passport.authenticate('jwt', {session: false}), purchaseController.newPurchase)

router.route('/getPurchases')
.post(purchaseController.getPurchases)

router.route('/addAdmin')
.post(passport.authenticate('jwt', {session: false}), userController.addAdmin)


module.exports = router