"use strict";
module.exports = (sequelize, DataTypes) => {
  const Town = sequelize.define(
    "Town",
    {
      name: DataTypes.STRING
    },
    {}
  );
  Town.associate = function(models) {
    Town.hasMany(models.Band, {
      onDelete: "cascade"
    });
  };
  return Town;
};
