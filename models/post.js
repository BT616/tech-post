const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');
const { post } = require('../controllers/api');

class Post extends Model { }

Post.init(

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            body: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        content:{
            type:DataTypes.STRING,
            allowNull:false

        }, user_id:{
                type:DataTypes.INTEGER,
                refrences:{
                    model:'user',
                    key:'id'
                }

        }
    },
    {
        sequelize,
        timestamps:true,
        updatedAt: false,
        freezeTableNae: true,
        underscored:true,
        modelName:'post'
    });

modules.exports = post