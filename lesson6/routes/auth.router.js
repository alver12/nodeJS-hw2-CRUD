const { Router } = require('express');
const { authController } = require('../controllers');
const { authMiddleware } = require('../middlewares');

const authRouter = Router();


authRouter.post('/', 
    authMiddleware.checkAuthMiddleware.checkAuthIsOk, 
    authController.login);

authRouter.post('/refresh',
    authMiddleware.checkAuthMiddleware.checkRefershToken,
    authController.refreshToken);

authRouter.get('/logout',
    authMiddleware.checkAuthMiddleware.checkAccessToken,
    authController.logout);

module.exports = authRouter;
