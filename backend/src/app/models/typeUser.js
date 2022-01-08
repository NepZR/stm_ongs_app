const { DataTypes } = require('sequelize');
const database = require('../../database');
const Campaign = require('./campaign');

const userType = database.define('user_types', {
  id: {
    primaryKey: true,
    unique: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    }
},{
  underscored: true
});

module.exports = userType;