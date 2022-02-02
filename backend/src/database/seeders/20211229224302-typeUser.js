'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let types = ['pessoa','ong'];
    let count = types.length;
    let data = []

    
    if(count) {
      data.push({
        id: 1,
        name: types[0],
        created_at: new Date(),
        updated_at: new Date()
      })

      data.push({
        id: 2,
        name: types[1],
        created_at: new Date(),
        updated_at: new Date()
      })
    }
    /*
    while(count--) {
      data.push({
        id: count+1,
        name: types[count],
        created_at: new Date(),
        updated_at: new Date()
      })
    }*/
    await queryInterface.bulkInsert('user_types', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_types', null, {});
  }
};
