
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
    }

};