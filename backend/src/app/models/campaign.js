const { DataTypes } = require('sequelize');
const database = require('../../database');
const Campaign_type = require('./typeCampaign');
const User = require('./user');

const Campaign = database.define('campaign', {
  id: {
    primaryKey: true,
    unique: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
  },
  title: {
      type: DataTypes.STRING,
      allowNull: false
    },
  value: {
    type: DataTypes.DOUBLE,
    allowNull: true
  },
  description:{
    type: DataTypes.STRING(500),
    allowNull: false
  },
  campaign_cover: {
    type: DataTypes.STRING(400),
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false
  },
  date_limit: {
    type: DataTypes.STRING,
    allowNull: false
  },
},{
  underscored: true
}
);
Campaign.belongsTo(Campaign_type);
Campaign_type.hasMany(Campaign);

module.exports = Campaign;