const Joi = require('joi')

const validator = {
  validateNewAccount: (req,res,next)=>{
    const schema = Joi.object({
      firstname: Joi.string().trim().required().min(2).message({
        "string.min": "Tu nombre debe contener al menos 2 letras",
      }),
      lastname: Joi.string().trim().required().min(2).message({
          "string.min": "Tu apellido debe contener al menos 2 letras",
      }),
      email: Joi.string().trim().required().email({tlds: {allow: false}}).message({
          "string.email": "Por favor escribe una dirección de correo válida"
      }),
      password: Joi.string().trim().required().pattern(/(?=.*\d)/).min(5).messages({
        "string.pattern.base": 'La contraseña debe tener al menos un número',
        "string.min": "Tu contraseña debe contener al menos 5 caracteres"
      })
    })
    const validation = schema.validate(req.body, {abortEarly: false})

    if(!validation.error){
      next()
    }else{
      console.log(validation.error.details)
      res.json({success: false, errors: validation.error.details})
    }
  }
}

module.exports = validator