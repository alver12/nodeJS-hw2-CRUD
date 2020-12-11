const dataBase = require('../data/users.json')

module.exports = {
    findUsers: () => dataBase,

    insertUser: (user) => {
        dataBase.push(user);
    },

    deleteUserById: (userId) => dataBase.splice(userId, 1),

    findUserById: (userId) => dataBase[userId] 

}