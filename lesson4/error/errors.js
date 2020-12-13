const { BAD_REQUEST } = require('../configs/error-codes');

module.exports = {
    NOT_VALID_ID: {
        message: 'Must be greater than 0',
        code: BAD_REQUEST
    },

    NOT_VALID_BODY: {
        message: 'Request is not valid',
        code: BAD_REQUEST
    }
};