const jwt = require('jsonwebtoken');

module.exports = () => {
    const access_token = jwt.sign({}, 'MEGA_KEY', {expiresIn:'10m'});
    const refresh_token = jwt.sign({}, 'MEGA_ULTRA_KEY', {expiresIn:'30d'});

    return{
        access_token,
        refresh_token
    }; 
};