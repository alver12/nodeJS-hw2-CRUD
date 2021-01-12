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

    updateCarById: (id, car) =>  {
        const carModel = db.getModel ('Car');

        return carModel.update(car, {
            where: { id },
            returning: true,
            plain: true 
        });
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