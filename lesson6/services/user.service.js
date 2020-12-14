const Car = require('../dataBase/models/Car');

const db = require('../dataBase').getInstance();

module.exports = {
    // findUsers: () => db.query('SELECT * FROM users'),

    // insertUser: (user) =>  db.query('INSERT INTO users (id, name, email, password) VALUE (${user.id}, ${user.name}, ${user.email}, ${user.password})'),
     
    // findUserById: () => {
        
    // } 
    
    findUsers: () => {
        const userModel = db.getModel ('User');

        console.log(userModel); 

        return userModel.findAll();
    },

    insertUser: (user) =>  {
        const userModel = db.getModel ('User');

        return userModel.create(user);

    },
     
    findUserById: (userId) => {
        const userModel = db.getModel('User'); 

        return userModel.findByPk(userId, {
            include: [
               { model: db.getModel('Car'), required: true, as: 'Car'}
            ],
          });
    } 
};