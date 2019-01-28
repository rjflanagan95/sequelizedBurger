var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var Burger = sequelize.define("burger", {
  burger_name: Sequelize.STRING,
  devoured: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false },
    createdAt: Sequelize.DATE
});

Burger.sync();

module.exports = Burger;