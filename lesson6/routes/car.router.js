const { Router } = require('express');
const { carController } = require('../controllers');
const { carMiddleware, fileMiddleware } = require('../middlewares');

const carRouter = Router();

carRouter.post('/', 
carMiddleware.checkCarValidity, 
fileMiddleware.checkFile, 
fileMiddleware.checkCarFile.carPhotos, 
fileMiddleware.checkCarFile.carDocs, 
carController.createCar);

carRouter.get('/', carController.getCars);

carRouter.get('/:car_id', carController.getCarById);

carRouter.put('/:car_id', carController.updateCar);

carRouter.delete('/:car_id', carController.deleteCars);

module.exports = carRouter;
