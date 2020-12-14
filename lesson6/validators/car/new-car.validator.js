const Joi = require('joi');

const { PRICE, YEAR, ID } = require('../../configs/regexp.enum');

module.exports = Joi.object({
    model: Joi.string()
        .alphanum()
        .min(2)
        .max(30)
        .required(),

    price: Joi.string().regex(PRICE).required(),
    
    year: Joi.string().regex(YEAR).required(),

    user_id: Joi.number().min(1).required()
 
})