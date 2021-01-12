const { BAD_REQUEST, NOT_FOUND, UNAUTHRIZED } = require('../configs/error-codes');

module.exports = {

    // BAD_REQUEST
    NOT_VALID_ID: {
          message: 'Must be greater than 0',
        code: BAD_REQUEST
    },

    NOT_VALID_BODY: {
        message: 'Request is not valid',
        code: BAD_REQUEST
    },

    WRONG_EMAIL_OR_PASSWORD: {
        message: 'Wrong email or password',
        code: BAD_REQUEST
    },

    TOO_BIG_FILE: {
        message: 'Too big file',
        code: BAD_REQUEST
    },

    JUST_ONE_PHOTO: {
        message: 'You can uppload just one photo for',
        code: BAD_REQUEST
    },

    NO_MORE_THAN_10_PHOTOS: {
        message: 'You can uppload no more than 10 photos',
        code: BAD_REQUEST
    },

    NO_MORE_THAN_10_DOCUMENTS: {
        message: 'You can uppload no more than 10 documents',
        code: BAD_REQUEST
    },

    WRONG_FILE_EXTENTION: {
        message: 'wrong file extention',
        code: BAD_REQUEST
    },
    //Unauthorized
    NOT_VALID_TOKEN: {
        message: 'Not valid token',
        code: UNAUTHRIZED
    },

    // NOT_FOUND
    NOT_FOUND: {
        message: 'Item not found',
        code: NOT_FOUND
    },
};