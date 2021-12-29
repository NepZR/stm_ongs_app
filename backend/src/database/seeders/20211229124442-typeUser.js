'use strict';
const { DataTypes } = require('sequelize');
const { v4 } = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [];
    let count = 2;
    while(count--) {
      data.push({
        id: v4(),
        type: count+1,
        created_at: new Date(),
        updated_at: new Date()
      });
    }
    await queryInterface.bulkInsert('user_types', data, {});
  },

  down: async (queryInterface, Sequelize) => { 
    await queryInterface.bulkDelete('user_types', null, {});
  }
};
