const { Router } = require('express');
const { userController } = require('../controllers');
const { authMiddlewares, userMiddleware } = require('../middlewares');

const userRouter = Router();


userRouter.post('/', userMiddleware.checkUserValidity, userController.createUser);

userRouter.get('/', userController.getUsers);

userRouter.get('/:user_id', userController.getUserById);

userRouter.put('/:user_id', userController.updateUser);

userRouter.delete('/:user_id', authMiddlewares.checkAccessToken, userController.deleteUsers);

module.exports = userRouter;
