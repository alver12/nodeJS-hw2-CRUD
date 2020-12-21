const jwt = require('jsonwebtoken');

module.exports = () => {
    const acces_token = jwt.sign({}, 'MEGA_KEY', {expiresIn:'10m'});
    const refresh_token = jwt.sign({}, 'MEGA_ULTRA_KEY', {expiresIn:'30d'});

    return{
        acces_token,
        refresh_token
    }; 
};