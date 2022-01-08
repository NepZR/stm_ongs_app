'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let types = ['online', 'presencial'];
    let count = types.length;
    let data = []
    while(count--) {
      data.push({
        id: count+1,
        name: types[count],
        created_at: new Date(),
        updated_at: new Date()
      })
    }
    await queryInterface.bulkInsert('campaign_types', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('campaign_types', null, {});
  }
};
