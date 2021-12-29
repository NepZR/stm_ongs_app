const Sequelize = require('sequelize');
const config = require('../config/database.json')

const database = new Sequelize(config.database, config.username, config.password, config);

database
  .authenticate()
  .then(() => {
    console.log('database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


module.exports = database;