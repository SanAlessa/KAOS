const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const clothesController = require('../controllers/clothesController')
const validator = require ('../controllers/validator')
const passport = require('passport')
require('../config/passport')

router.route('/user/signup')
.post(validator.validateNewAccount, userController.signUp)

router.route('/user/signin')
.post(userController.signIn)

router.route('/user/ls')
.post(passport.authenticate('jwt', {session: false}), userController.logFromLS)

router.route('/clothes/addClothes')
.post(clothesController.addClothes)

router.route('/clothes/getClothes')
.get(clothesController.getClothes)

router.route('/clothes/addStock')
.post(clothesController.addToStock)

router.route('/clothes/substractStock')
.post(clothesController.substractToStock)

router.route('/clothes/deleteClothes')
.put(clothesController.deleteClothes)

router.route('./clothes/modifyClothes')
.post(clothesController.modifyClothes)

module.exports = router