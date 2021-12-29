const { DataTypes } = require('sequelize');
const database = require('../../database');

const userType = database.define('user_types', {
  id: {
    primaryKey: true,
    unique: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
  },
  type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
},{
  underscored: true
});

module.exports = userType;