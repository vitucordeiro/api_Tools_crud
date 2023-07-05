'use strict';
const DataTypes = require('sequelize').DataTypes;
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
    await queryInterface.createTable('tools',{
      id:{
          type:DataTypes.INTEGER,
          primaryKey:true,
          autoIncrement:true,
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
          type:DataTypes.TEXT,
      },
      tags:{
          type:DataTypes.ARRAY(DataTypes.STRING),
          defaultValue:[],
      },
      createdAt:{
          type:DataTypes.DATE
      },
      updatedAt:{
          type:DataTypes.DATE
      }
  })
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('tools');
  }
};
