'use strict';
module.exports = (sequelize, DataTypes) => {
  const Town = sequelize.define('Town', {
    name: DataTypes.STRING
  }, {});
  Town.associate = function(models) {
    // associations can be defined here
  };
  return Town;
};