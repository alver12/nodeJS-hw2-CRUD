const { Router } = require('express');
const { carController } = require('../controllers');
const { carMiddleware } = require('../middlewares');

const carRouter = Router();


carRouter.post('/', carMiddleware.checkCarValidity, carController.createCar);

carRouter.get('/', carController.getCars);

carRouter.get('/:car_id', carController.getCarById);

carRouter.delete('/:car_id', carController.deleteCars);

module.exports = carRouter;
