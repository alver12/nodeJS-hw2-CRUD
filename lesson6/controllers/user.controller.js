const fs = require('fs-extra').promises;
const path = require('path');
const uuid = require('uuid').v1();

const userService = require('../services/user.service');
const { ErrorHandler, errors } = require('../error');
const { hash } = require('../helpers/password.helper');

module.exports = {
    createUser: async (req, res) =>{
        try {
            const { 
                avatar, 
                body: { password, email, name } 
            } = req;
            const hashedPassword = await hash(password);

            Object.assign(req.body, {password});

            const createdUser = await userService.insertUser(req.body);

            if (avatar) {
                const pathWithoutPublic = path.join('user', `${createUser.id}`, 'photos');
                const photoDir = path.join(process.cwd(), 'public', pathWithoutPublic);
                const fileExtension = avatar.name.split('.').pop();
                const photoName = `${uuid}.${fileExtension}`;
                const finalPhotoPath = path.join(pathWithoutPublic, photoName);

                await fs.mkdir(photoDir, {recursive: true});
                await avatar.mv(path.join(photoDir, photoName));

                await userService.updateUserById(createdUser.id, {avatar: finalPhotoPath});
            }
             
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

    updateUser: async (req, res, next) => {
        try{
            const { user_id } = req.params;
        
            if (user_id < 0){
                throw new ErrorHandler(errors.NOT_VALID_ID.message, errors.NOT_VALID_ID.code);
            }
            const user = await userService.findUserById(user_id);

            user.name = req.body.name;

            user.password = req.body.password;

            await user.save();

            res.json('User updated');
        }   catch (e) {
            next(e);
        }
    },

    deleteUsers: async (req, res, next) => {
        try {
            const { user_id } = req.params;
        console.log('user_id = ', user_id);
            if (user_id < 0){
                throw new ErrorHandler(errors.NOT_VALID_ID.message, errors.NOT_VALID_ID.code);
            }
            const user = await userService.findUserById(user_id);     
     
            if (!user){
                throw new ErrorHandler(errors.NOT_FOUND.message, errors.NOT_FOUND.code);
            }

            await user.destroy();
            res.json('User deleted');

        }   catch (e) {
            next(e);
        }
    }
};