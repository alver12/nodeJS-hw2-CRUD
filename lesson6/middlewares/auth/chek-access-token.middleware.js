const jwt = require('jsonwebtoken');

const { ErrorHandler, errors } = require('../../error');
const { oAuthService } = require('../../services');


module.exports = async (req, res, next) => {
    try {
        const access_token = req.get('Authorization');

        console.log(access_token);

        if (!access_token) {
            throw new ErrorHandler(errors.NOT_VALID_TOKEN.message, errors.NOT_VALID_TOKEN.code);
        }

        jwt.verify(access_token, 'MEGA_KEY', err => {
            if (err) {
                throw new ErrorHandler(errors.NOT_VALID_TOKEN.message, errors.NOT_VALID_TOKEN.code);
            }
        });

        const userWithToken = await oAuthService.getTokenWithUserByParams({access_token})
       
        if (!userWithToken) {
            throw new ErrorHandler(errors.NOT_VALID_TOKEN.message, errors.NOT_VALID_TOKEN.code);
        }

        if (userWithToken.id !== +req.params.userId){
            throw new Error ('PERMISSION');
        }

        req.user = userWithToken;

        next();
    } catch (e) {
        next(e);
    }

}