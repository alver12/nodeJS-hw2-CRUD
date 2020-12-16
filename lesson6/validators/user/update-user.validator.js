const Joi = require('joi');

const { PASSWORD } = require('../../configs/regexp.enum');

module.exports = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
  
    password: Joi.string().regex(PASSWORD).required(),
 
});