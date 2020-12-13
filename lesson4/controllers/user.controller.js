const userService = require('../services/user.service');
const { ErrorHandler, errors } = require('../error');
const { nextTick } = require('process');

module.exports = {
    createUser: (req, res) =>{
        try {
            userService.insertUser(req.body);
             
            res.status(201).json('User created');
        }   catch (e) {
            res.json(e.message);
        }
    },

    getUsers: async (req, res, next) =>{
        try{
            const users = await userService.findUsers();

            console.log (users);

            users.forEach((user) => {
                console.log(user);
            });

            res.json(users);
        } catch (e) {
            next(e);
        } 
            
    },

    getUserById: async (req, res, next) => {
        try{
            const { user_id } = req.params;
        
            if (user_id < 0){
                throw new ErrorHandler(errors.NOT_VALID_ID.message, errors.NOT_VALID_ID.code);
            }
            const user = await userService.findUserById(user_id);

            res.json(user);
        }   catch (e) {
            next(e);
        }
    },

    deleteUsers: (req, res, next) => {
        try{
            const { user_id } = req.params;
        
            if (user_id < 0){
                throw new Error('User ID must be greater than 0');
            }
            const user = userService.findUserById(user_id);
            
            if (!user_id){
                throw new Error('User not found');
            }

            user.filter((user_id) => user_id.email !== email);
            return (users);
            res.json('User deleted');

        }   catch (e) {
            next(e);
        }
    }
};