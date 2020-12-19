const bcrypt = require('bcrypt');

const { errors: {WRONG_EMAIL_OR_PASSWORD}, ErrorHandler } = require('../error')

module.exports = {
    hash: (password) => bcrypt.hash(password, 10),
    compare: async (password, hash) => {
        const isPasswordEquels = await bcrypt.compare(password, hash);

        if (!isPasswordEquels) {
            throw new ErrorHandler(WRONG_EMAIL_OR_PASSWORD.message, WRONG_EMAIL_OR_PASSWORD.code)
        }
    }
};

