const { Model, DataTypes, INTEGER } = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/types/query-types');
const sequelize = require('../config/connection');
const { comments } = require('../controllers/api');

class Comments extends Model {};


Comment.init({
    id:{
        type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        
    },
    body:{
        type:DataTypes.STRING,
        allowNull:false
    },
     sequelize
    
})
module.exports=comments