module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn("Bands", "towns_id", Sequelize.INTEGER, { after: "name" })
      .then(() => {
        queryInterface.addConstraint("Bands", ["towns_id"], {
          type: "foreign key",
          name: "towns_id",
          references: {
            //Required field
            table: "Towns",
            field: "id"
          },
          onDelete: "cascade",
          onUpdate: "cascade"
        });
      });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
