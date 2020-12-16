const { required } = require("joi");

module.exports = {
    newCarValidator: require('./new-car.validator'),
    updateCarValidator: require('./update-car.validator')
};