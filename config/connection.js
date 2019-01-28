// Dependencies
var Sequelize = require("sequelize");

var mysql = require("mysql");

var sequelize;


// if (process.env.JAWSDB_URL) {
//     sequelize = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
    const keys = require("../keys.js");

    sequelize = new Sequelize("sequelize_burgers", "root", keys.mysqlCred.pw, {
        host: "localhost",
        port: 3306,
        dialect: "mysql",
        pool: {
          max: 5,
          min: 0,
          idle: 10000
        }
      });
// }

// Exports the connection for other files to use
module.exports = sequelize;