const bcrypt = require('bcrypt');

const { errors: {WRONG_EMAIL_OR_PASSWORD}, ErrorHandler } = require('../error')

module.exports = {
    hash: (password) => bcrypt.hash(password, 10),
    compare: async (password, hash) => {
        const isPasswordEquals = await bcrypt.compare(password, hash);
        // console.log ('***compare:***');
        // console.log (this.compare);
        // console.log ('*********');
        // console.log ('*********');
        // console.log (isPasswordEquels);
        // console.log ('*********');
        if (!isPasswordEquals) {
            throw new ErrorHandler(WRONG_EMAIL_OR_PASSWORD.message, WRONG_EMAIL_OR_PASSWORD.code)
        }
    }
};

