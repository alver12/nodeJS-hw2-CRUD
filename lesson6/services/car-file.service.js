const db = require('../dataBase').getInstance();

module.exports = {

    findFileCars: () => {
        const carFileModel = db.getModel ('Car_File');

        // console.log(carModel); 

        return carFileModel.findAll();
    },

    insertFileCar: (car_file) =>  {
        const userModel = db.getModel ('Car_File');

        return carFileModel.create(car_file);

    },

    updateFileCarById: (id, car_file) =>  {
        const carFileModel = db.getModel ('Car_File');

        return carFileModel.update(car_file, {
            where: { id },
            returning: true,
            plain: true 
        });
    },    
     
    findCarFileById: (carFileId) => {
        const carFileModel = db.getModel('Car_File'); 

        return carFileModel.findByPk(carFileId, {
            include: [
               { model: db.getModel('Car'), required: true, as: 'Car'}
            ],
          });
    } 
};