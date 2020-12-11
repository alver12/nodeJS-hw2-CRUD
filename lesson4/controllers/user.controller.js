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

    getUsers: async (req, res) =>{
        try{
            const users = await userService.findUsers();

            console.log (users);

            users.forEach((user) => {
                console.log(user);
            });

            res.json(users);
        } catch (e) {
            res.status(400).json(e.message);
        } 
            
    },

    getUserById: async (req, res) => {
        try{
            const { user_id } = req.params;
        
            if (user_id < 0){
                throw new Error('User ID must be greater than 0');
            }
            const user = await userService.findUserById(user_id);

            console.log(user);
            res.json(user);
        }   catch (e) {
            res.status(400).json(e.message);
        }
    },

    deleteUsers: (req, res) => {
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
            res.status(400).json(e.message);
        }
    }
};