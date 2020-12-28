const fs = require('fs-extra').promises;
const path = require('path');
const uuid = require('uuid').v1();

const carService = require('../services/car.service');
const { ErrorHandler, errors } = require('../error');

module.exports = {
    createCar: async (req, res, next) =>{
        try {
            const {photos, docs} = req;
            // const {carDocs} = req;

            console.log('*Photos:*');
            console.log(photos);
            console.log('****');
            console.log('*Docs:*');
            console.log(docs);
            console.log('****');

            const createdFileCar = await carFileService.insertFileCar(req.body);
            console.log('inseted Car: ', createdFileCar);
            photos.forEach((photo) => {
                console.log('photo: ', photo);
            });
            if (carPhoto) {
                const pathWithoutPublic = path.join('cars_files', `${createdFileCar.id}`, 'photos');
                const photoDir = path.join(process.cwd(), 'public', pathWithoutPublic);
                const fileExtension = carPhoto.name.split('.').pop();
                const photoName = `${uuid}.${fileExtension}`;
                const finalPhotoPath = path.join(pathWithoutPublic, photoName);

                await fs.mkdir(photoDir, {recursive: true});
                await carPhoto.mv(path.join(photoDir, photoName));

                await carFileService.updateFileCarById(createdFileCar.id, {carPhoto: finalPhotoPath});
            }
            if (carDocs) {
                const pathWithoutPublic = path.join('cars_files', `${createdCar.id}`, 'docs');
                const docDir = path.join(process.cwd(), 'public', pathWithoutPublic);
                const fileExtension = carDocs.name.split('.').pop();
                const docName = `${uuid}.${fileExtension}`;
                const finalDocPath = path.join(pathWithoutPublic, docName);

                await fs.mkdir(docDir, {recursive: true});
                await carDocs.mv(path.join(docDir, docName));

                await carService.updateFileCarById(createdFileCar.id, {carDocs: finalDocPath});
            } 
             
            res.status(201).json('Car created');
        }   catch (e) {
            res.json(e.message);
        }
    },

    getCars: async (req, res, next) =>{
        try{
            const cars = await carService.findCars();

            console.log (cars);

            cars.forEach((car) => {
                console.log(car);
            });

            res.json(cars);
        } catch (e) {
            next(e);
        } 
            
    },

    getCarById: async (req, res, next) => {
        try{
            const { car_id } = req.params;
        
            if (car_id < 0){
                throw new ErrorHandler(errors.NOT_VALID_ID.message, errors.NOT_VALID_ID.code);
            }
            const car = await carService.findCarById(car_id);
            
            console.log(car);
            res.json(car);
        }   catch (e) {
            next(e);
        }
    },

    updateCar: async (req, res, next) => {
        try{
            const { car_id } = req.params;
        
            if (car_id < 0){
                throw new ErrorHandler(errors.NOT_VALID_ID.message, errors.NOT_VALID_ID.code);
            }
            const car = await carService.findCarById(car_id);

            car.model = req.body.model;

            car.price = req.body.price;

            car.year = req.body.year;

            await car.save();
            
            res.json('Car updated');
        }   catch (e) {
            next(e);
        }
    },

    deleteCars: async (req, res, next) => {
        try {
            const { car_id } = req.params;

            if (car_id < 0){
                throw new ErrorHandler(errors.NOT_VALID_ID.message, errors.NOT_VALID_ID.code);
            }
            const car = await carService.findCarById(car_id);     
     
            if (!car){
                throw new ErrorHandler(errors.NOT_FOUND.message, errors.NOT_FOUND.code);
            }

            await car.destroy();
            res.json('Car deleted');

        }   catch (e) {
            next(e);
        }
    }
};