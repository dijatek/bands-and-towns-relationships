module.exports = (sequelize, DataTypes) => {
  const Band = sequelize.define(
    "Band",
    {
      name: DataTypes.STRING,
      town: DataTypes.STRING
    },
    {
      underscored: false // Bug in Sequelize v5 preventing proper use of this https://github.com/sequelize/sequelize/issues/11225
    }
  );
  Band.associate = function(models) {
    // associations can be defined here
  };
  return Band;
};
