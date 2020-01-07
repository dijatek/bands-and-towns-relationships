'use strict';
module.exports = (sequelize, DataTypes) => {
  const Band = sequelize.define('Band', {
    name: DataTypes.STRING,
    town: DataTypes.STRING
  }, {
    underscored: true,
  });
  Band.associate = function(models) {
    // associations can be defined here
  };
  return Band;
};