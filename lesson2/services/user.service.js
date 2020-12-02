const dataBase = require('../data/users.json')

module.exports = {
    findUsers: () => dataBase,
    insertUser: (user) => {
        dataBase.push(user);
    },

    findUserById: (userId) => dataBase[userId] 

}