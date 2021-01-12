const { Router } = require('express');
const { userController } = require('../controllers');
const { authMiddleware, fileMiddleware, userMiddleware } = require('../middlewares');

const userRouter = Router();


userRouter.post('/', 
userMiddleware.checkUserValidity, 
fileMiddleware.checkFile, 
fileMiddleware.checkAvatar, 
userController.createUser);

userRouter.get('/', userController.getUsers);

userRouter.get('/:user_id', userController.getUserById);

userRouter.put('/:user_id', userController.updateUser);

userRouter.delete('/:user_id', authMiddleware.checkAuthMiddleware.checkAccessToken, userController.deleteUsers);

module.exports = userRouter;
