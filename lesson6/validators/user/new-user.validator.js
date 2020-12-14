const Joi = require('joi');

const { EMAIL, PASSWORD } = require('../../configs/regexp.enum');

module.exports = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    email: Joi.string().regex(EMAIL).required(),
    
    password: Joi.string().regex(PASSWORD).required(),
 
})