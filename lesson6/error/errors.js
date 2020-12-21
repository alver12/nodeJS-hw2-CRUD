const { BAD_REQUEST, NOT_FOUND, UNAUTHRIZED } = require('../configs/error-codes');

module.exports = {
    NOT_VALID_ID: {
        message: 'Must be greater than 0',
        code: BAD_REQUEST
    },

    NOT_VALID_BODY: {
        message: 'Request is not valid',
        code: BAD_REQUEST
    },

    NOT_FOUND: {
        message: 'Item not found',
        code: NOT_FOUND
    },

    WRONG_EMAIL_OR_PASSWORD: {
        message: 'Wrong email or password',
        code: BAD_REQUEST
    },

    //Unauthorized
    NOT_VALID_TOKEN: {
        message: 'Not valid token',
        code: UNAUTHRIZED
    }
};