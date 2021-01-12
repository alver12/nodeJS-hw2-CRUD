
const db = require('../dataBase').getInstance();

module.exports = {
    
    createTokenPair: (tokenPair) => {
        const OAuthModel = db.getModel ('O_Auth');
        
        return OAuthModel.create(tokenPair);
    },

    getTokenWithUserByParams: (findObject) => {
        const OAuthModel = db.getModel ('O_Auth');
        const userModel = db.getModel ('User');

        return userModel.findOne({
            include: [{
                model: userModel,
                where: findObject
            }]
        });
    },

    getRefreshToken: (refreshToken) => {
        const OAuth = dataBase.getModel(O_Auth);
        const User = dataBase.getModel(User);

        return User.findOne({
            include: {
                model: OAuth,
                where: { refreshToken }
            }
        });
    },

    deleteToken: (deleteToken) => {
        const OAuth = dataBase.getModel(O_Auth);

        return OAuth.destroy({
            where: { access_token: deleteToken }
        });
 
    }
    

};