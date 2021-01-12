const jwt = require('jsonwebtoken');

const { ACCESS_TOKEN_SECRET } = require('../../configs/config');
const { compare } = require('../../helpers/password.helper');
const { oAuthService } = require('../../services');
const { findUserByParams } = require('../../services/user.service');
const { ErrorHandler, errors } = require('../../error');
// const { AUTHORIZATION } = require('../../constants/constants');

module.exports = {

    checkAuthIsOk: async (req, res, next) => {
        try {
            const { password, email } = req.body;

            const user = await findUserByParams({ email });
            console.log('*******');
            console.log(user);
            console.log('*******');
            
        
            if(!user) {
                throw new ErrorHandler(errors.WRONG_EMAIL_OR_PASSWORD.message, errors.WRONG_EMAIL_OR_PASSWORD.code);
            }
        
            await compare(password, user.password);

            console.log('^^COMPARE^^');
            console.log(compare);
            console.log('^^COMPARE^^');

            req.user = user;
            
            next();    
        } catch (e) {
            next(e)
        }
    },

    checkAccessToken: async (req, res, next) => {
        try {
            const access_token = req.get('Authorization');

            console.log(access_token);

            if (!access_token) {
                throw new ErrorHandler(errors.NOT_VALID_TOKEN.message, errors.NOT_VALID_TOKEN.code);
            }

            jwt.verify(access_token, ACCESS_TOKEN_SECRET, err => {
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
    },

    checkRefershToken: async (req, res, next) => {
        try {
            
        } catch (e) {

        }
    },

    checkLogout: async (req, res, next) => {
        try {
            const accessTokenForLogout = req.get(AUTHORIZATION);
            
        } catch (e) {

        }
    }


};
