const Sequelize = require('sequelize');
const config = require('../config/database.json')

const database = new Sequelize('stmongs', 'root', 'root', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432
});

database
  .authenticate()
  .then(() => {
    console.log('database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


module.exports = database;