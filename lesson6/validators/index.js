const { required } = require("joi");

module.exports = {
    userValidator: require('./user'),
    updateValidator: require('./user'),
    carValidator: require('./car'),
    updateCarValidator: require('./car')


};