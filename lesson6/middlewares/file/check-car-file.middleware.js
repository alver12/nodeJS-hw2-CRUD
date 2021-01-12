const { errors, ErrorHandler } = require('../../error');
const { PHOTOS_MIMETYPES } = require('../../constants/constants');

module.exports = {

    carPhotos: (req, res, next) => {
        try {
            if (req.photos.length > 10) {
                throw new ErrorHandler(errors.NO_MORE_THAN_10_PHOTOS.message, errors.NO_MORE_THAN_10_PHOTOS.code);
            }

            next();
            
        } catch (e) {
            next(e);
        }
    },

    carDocs: (req, res, next) => {
        try {
            if (req.docs.length > 10) {
                throw new ErrorHandler(errors.NO_MORE_THAN_10_DOCUMENTS.message, errors.NO_MORE_THAN_10_DOCUMENTS.code);
            }

            next();
        } catch (e) {
            next(e);
        }
    }

};