const Sequelize = require("sequelize"); //import sequelize
//create new sequelize
const sequelize = new Sequelize("node-complete", "root", "nishma@99", {
  dialect: "mysql",
  host: "localhost",
}); //automatically connect to db
module.exports = sequelize; //export sequelize
