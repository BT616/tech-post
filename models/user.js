const { Model, DataTypes}=require('sequelize');
const sequelize = require('../config/connection');
const bcrypt =require('bcrypt')

class User extends Model{
    checkPassword(password){
        return bcrypt.compareSync(password,this.password)
    }
}

User.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allownNull:false,
            primaryKey: true,
            autoIncrement: true,
        },
        username:{
                type:DataTypes.INTEGER,
                allownNull:false,
              
            },
        
            password:{
                type:DataTypes.STRING,
                allowNull: false,
                validate:{
                    len:[4],
                }
            }
        },
        {

            hooks:{
                beforeCreate: async (newUserData) =>{
                    newUserData.password = await bcrypt.hash(newUserData.password,10);
                    return newUserData;
                }
            },
            sequelize,
            timestamps:false,
            freezeTableName: true,
            underscored:true,
            modelName: 'user',
        }
);
module.exports = User;