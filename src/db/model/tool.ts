import {Model, DataTypes} from 'sequelize'

import {Sequelize} from 'sequelize';

class Tool extends Model{
    public id!: number;
    public title!: String;
    public link!: String;
    public description!: String;
    public tags!:Array<string>;

}

export default Tool;

export const initToolModel = (sequelize:Sequelize)=>{

    Tool.init(
        {
            id:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            title:{
                type:DataTypes.STRING,
                allowNull:false
            },
            link:{
                type:DataTypes.STRING,
                allowNull:false
            },
            description:{
                type:DataTypes.STRING,
                allowNull: false
            },
            tags:{
                type:DataTypes.ARRAY(DataTypes.STRING),
                defaultValue: [],
                allowNull: false
            }
        }
        ,
        {tableName:'tools',
        sequelize: sequelize})
}
