const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const clothesController = require('../controllers/clothesController')
const validator = require ('../controllers/validator')
const passport = require('passport')
require('../config/passport')

router.route('/users')
.get(userController.find)

router.route('/user/signup')
.post(validator.validateNewAccount, userController.signUp)


router.route('/user/signin')
.post(userController.signIn)

router.route('/user/ls')
.post(passport.authenticate('jwt', {session: false}), userController.logFromLS)

// router.route('/clothes/add')
// .post(clothesController.addClothes)

module.exports = router