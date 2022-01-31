const { DataTypes } = require('sequelize');
const database = require('../../database');
const Campaign = require('./campaign');
const User_type = require('./typeUser');

const User = database.define('users', {
  id: {
    primaryKey: true,
    unique: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
    },
  email: {
    type: DataTypes.STRING,
    allowNull: false
    },
  reg_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profile_pic: {
    type: DataTypes.STRING(400),
    allowNull: true
  },
  profile_cover: {
    type: DataTypes.STRING(400),
    allowNull: true
  },
  url_picpay: {
    type: DataTypes.STRING(400),
    allowNull: true
  },
  description:{
    type: DataTypes.STRING(500),
    allowNull: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
},{
  underscored: true
}
);
User.belongsTo(User_type);
User_type.hasMany(User);
User.hasMany(Campaign);
Campaign.belongsTo(User);
module.exports = User;