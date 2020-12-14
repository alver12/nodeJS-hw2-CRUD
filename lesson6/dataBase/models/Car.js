module.exports = (client, DataTypes) => {
    const Car = client.define(
        'Car',
        {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id'
            }
        }
    },
        {
            tableName: 'cars',
            timestamps: false    
    });     
    Car.associate = function(models) {
        models.Car.belongsTo(models.User, {
          foreignKey: 'user_id',
          targetKey: 'id',
          as: 'User'
        });
    };
    return Car;
}