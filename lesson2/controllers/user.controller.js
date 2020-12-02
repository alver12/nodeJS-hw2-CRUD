const userService = require('../services/user.service');

module.exports = {
    createUser: (req, res) =>{
        try {
            userService.insertUser(req.body);
             
            res.status(201).json('User created');
        }   catch (e) {
            res.json(e.message);
        }
    },

    getUsers: (req, res) =>{

            const users = userService.findUsers();
            res.json(users);
    },

    getUserById: (req, res) => {
        try{
            const { user_id } = req.params;
        
            if (user_id < 0){
                throw new Error('User ID must be greater than 0')
            }
            const user = userService.findUserById(user_id);
            
            if (!user_id){
                throw new Error('User not found')
            }
            res.json(user);
        }   catch (e) {
            res.status(400).json(e.message);
        }
    },

    deleteUsers: (req, res) => {
        try{
            const { user_id } = req.params;
        
            if (user_id < 0){
                throw new Error('User ID must be greater than 0')
            }
            const user = userService.findUserById(user_id);
            
            if (!user_id){
                throw new Error('User not found')
            }
            res.json('User deleted');
        }   catch (e) {
            res.status(400).json(e.message);
        }
    }
};