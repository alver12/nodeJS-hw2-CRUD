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

    deleteCars: (req, res, next) => {
        try{
            const { car_id } = req.params;
        
            if (car_id < 0){
                throw new ErrorHandler('Car ID must be greater than 0');
            }
            const car = carService.findCarById(car_id);
            
            if (!car_id){
                throw new ErrorHandler('Car not found');
            }

            car.filter((car_id) => car_id.model !== model);
            return (cars);
            res.json('Car deleted');

        }   catch (e) {
            next(e);
        }
    }
};