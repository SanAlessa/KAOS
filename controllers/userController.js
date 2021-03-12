const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require ("jsonwebtoken")

const userController = {

    find: async (req, res) =>{
        User.find()
        .then(response => res.json({success: true, response}))
        .then(error => res.json({success: false, error}))
    },

    signUp: async (req, res) => {
        var errors = []
        const {firstname, lastname, email, password, rol} = req.body
        const userExists = await User.findOne({email: email})
        if (userExists) {
            var error = {context: {label: 'email'}, message: 'Este email ya se encuentra en uso!'}
            errors.push(error)
        }
        else{
            const passwordHasheado = bcryptjs.hashSync(password, 10)
            var newUser = new User({
                firstname, lastname, email, password: passwordHasheado, rol
            })
            var newUserSaved = await newUser.save()
            var token = jwt.sign({...newUserSaved}, process.env.SECRET_KEY, {})
        }
        return res.json({success: errors.length === 0 ? true : false,
            errors: errors,
            response: errors.length === 0 && {token, firstname: newUserSaved.firstname, email: newUserSaved.email, lastname: newUserSaved.lastname, id: newUserSaved._id, rol: newUserSaved.rol}})
    },

    signIn: async (req, res) => {
        const {email, password} = req.body
        const userExists = await User.findOne({email: email})
        if (!userExists) {
            return res.json({success: false, mensaje: 'Nombre de usuario y/o contraseña incorrectos.'})
        }
        const passwordMatches = bcryptjs.compareSync(password, userExists.password)
        if (!passwordMatches) {
            return res.json({success: false, mensaje: 'Nombre de usuario y/o contraseña incorrectos.'})
        }
        var token = jwt.sign({...userExists}, process.env.SECRET_KEY, {})
        return res.json({success: true, response: 
            {token, firstname: userExists.firstname, email: userExists.email, lastname: userExists.lastname, id: userExists._id,  rol: userExists.rol}})
    },

    logFromLS: async (req, res) => {
      console.log(req.user)
        res.json({success: true, response: 
            {token: req.body.token, firstname: req.user.firstname, lastname: req.user.lastname, email: req.user.email, id:req.user._id, rol: req.user.rol}})
    },

    addAdmin: async (req, res)=>{
      User.findOneAndUpdate({_id:req.user._id},
        {$set: {rol: 'admin'}},
        {new: true})
      .then(response => res.json({success: true, response}))
      .catch(error => res.json({success: false, error}))
    }
}

module.exports = userController