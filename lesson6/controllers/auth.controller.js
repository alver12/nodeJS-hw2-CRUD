const { oAuthService } = require('../services');
const tokinizer = require('../helpers/tokinizer');
const { AUTHORIZATION } = require('../constants/constants')

module.exports = {
    login: async (req, res, next) =>{
        try {
            const { id } = req.user;
            
            const token_pair = tokinizer();

            await oAuthService.createTokenPair({user_id: id, ...token_pair});
             
            res.json(token_pair);
        }   catch (e) {
            next(e);
        }
    },
    logout: async (req, res, next) => {
        try {
            const { accessToken } = req.get(AUTHORIZATION);
            await tokenService.removeToken(accessToken);

            res.json(NO_CONTENT);
        } catch (e) {
            next(e);
        }
    },
    refreshToken: async (req, res, next) => {
        try {
            const { refreshToken } = req;
            await tokenService.getRefreshToken(refreshToken);

            res.json(NO_CONTENT);
        } catch (e) {
            next(e);
        }
    }

};