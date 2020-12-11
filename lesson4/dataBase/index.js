// const mysql2 = require ('mysql2');

// let connection = mysql2.createConnection( {
//     user: 'newroot',
//     password: 'root',
//     database: 'auto_shop',
//     host: 'localhost'
// });

// module.exports = connection.promise();

const fs = require ('fs');
const path = require ('path');
const { Sequelize, DataTypes } = require ('sequelize');

module.exports = (()=>{

    let instance;

    function initConnection() {
        const client = new Sequelize('auto_shop', 'newroot', 'root', {
            host: 'localhost',
            dialect: 'mysql'
        });

        const models = {};
        const modelsPath = path.join(process.cwd(), 'dataBase', 'models');

        const getModels = () => {
            fs.readdir(modelsPath, (err, files) => {
                files.forEach((file) => {
                    //file = User.js
                    const [model] = file.split('.');
                    //model = User / Car / Product / etc.
                    const modelFile = require(path.join(modelsPath, model));
                    models[model] = modelFile(client, DataTypes);
                });
                Object.keys(models).forEach(key => { 
                    if ('associate' in models[key]) { 
                        models[key].associate(models); 
                    } 
                });
            });
        };

        return {
            setModels: () => getModels(),
            getModel: (modelName) => models[modelName]
        }; 
    }; 

    return{
        getInstance: () => {
            if (!instance) {
                //CREATE CONNECTION
                instance= initConnection();
            }

            return instance;
        }
    } 

}) ();
