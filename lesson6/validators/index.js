const { required } = require("joi");

module.exports = {
    userValidator: require('./user'),
    carValidator: require('./car')

};