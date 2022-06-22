const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Creating the Trail Model
class Trail extends Model {}

// create fields/columns for trail model
Trail.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        miles: {
            type: DataTypes.DECIMAL(5,3),
            allowNull: true
        },
        kilometers: {
            type: DataTypes.DECIMAL(5,3),
            allowNull: true
        },
        lat: {
            type: DataTypes.DECIMAL(10,7),
            allowNull: false
        },
        lon: {
            type: DataTypes.DECIMAL(10,7),
            allowNull: false
        },
        difficulty: {
            type: DataTypes.STRING,
            allowNull: false
        },
        blurb: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'trail'
    }
);

module.exports = Trail;