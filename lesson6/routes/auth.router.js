const { Router } = require('express');
const { authController } = require('../controllers');
const { authMiddleware } = require('../middlewares');

const authRouter = Router();


authRouter.post('/', authMiddleware.isPasswordOk, authController.login);

module.exports = authRouter;
