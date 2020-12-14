module.exports = (client, DataTypes) => {
    const User = client.define(
        'User',
        {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
        {
            tableName: 'users',
            timestamps: false    
    });  

    User.associate = function(models) {
        User.hasMany(models.Car, {
          foreignKey: 'user_id',
          sourceKey: 'id',
          as: 'Car'
        });
    };   


    return User;
}