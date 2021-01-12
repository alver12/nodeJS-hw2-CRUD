module.exports = (client, DataTypes) => {
    const Car_File = client.define(
        'Car_File',
        {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        car_file: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        car_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Car',
                key: 'id'
            }
        },
    },
        {
            tableName: 'cars_files',
            timestamps: false    
    });     
    Car_File.associate = function(models) {
        models.Car_File.belongsTo(models.Car, {
          foreignKey: 'car_id',
          targetKey: 'id',
          as: 'Car'
        });
    };
    return Car_File;
}