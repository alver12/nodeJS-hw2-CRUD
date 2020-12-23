const { errors, ErrorHandler } = require('../../error');
const { PHOTOS_MIMETYPES } = require('../../constants/constants');

module.exports = (req, res, next) => {
    try {
        if (req.photos.length > 1) {
            throw new ErrorHandler(errors.JUST_ONE_PHOTO.message, errors.JUST_ONE_PHOTO.code);
        }

        req.avatar = req.photos[0];

        next();
    } catch (e) {
        next(e);
    }

}