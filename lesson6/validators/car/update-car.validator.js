const Joi = require('joi');

const { PRICE, YEAR } = require('../../configs/regexp.enum');

module.exports = Joi.object({
    model: Joi.string()
        .alphanum()
        .min(2)
        .max(30)
        .required(),

    price: Joi.string().regex(PRICE).required(),
    
    year: Joi.string().regex(YEAR).required(),
 
});