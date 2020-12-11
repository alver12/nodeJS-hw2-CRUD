const db = require('../dataBase').getInstance();

module.exports = {

    findCars: () => {
        const carModel = db.getModel ('Car');

        // console.log(carModel); 

        return carModel.findAll();
    },

    insertCar: (car) =>  {
        const userModel = db.getModel ('Car');

        return userModel.create(car);

    },
     
    findCarById: (carId) => {
        const carModel = db.getModel('Car'); 

        return carModel.findByPk(carId, {
            include: [
               { model: db.getModel('User'), required: true, as: 'User'}
            ],
          });
    } 
};