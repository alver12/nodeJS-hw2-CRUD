const { ErrorHandler } = require('../error');
const { BAD_REQUEST } = require('../configs/error-codes');
const { carValidator } = require('../validators');

module.exports = {
    checkCarValidity:(req, res, next) => {
        try {
            const { error } = carValidator.newCarValidator.validate(req.body);

            if(error){
                throw new ErrorHandler(error.details[0].message, BAD_REQUEST);
            }

            next();
        }  catch (e) {
            next(e);
        }
    }
};
