const carService = require('../services/car.service');
const { ErrorHandler, errors } = require('../error');

module.exports = {
    createCar: (req, res) =>{
        try {
            carService.insertCar(req.body);
             
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