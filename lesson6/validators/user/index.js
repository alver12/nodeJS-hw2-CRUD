const { required } = require("joi");

module.exports = {
    newUserValidator: require('./new-user.validator'),
    updateUserValidator: require('./update-user.validator'),

};