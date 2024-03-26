const Sequelize = require("sequelize"); //import sequelize
const sequelize = require("../util/database"); //import to connect db
const Product = sequelize.define("product", {
  //define model that will be managed by sequelize.js definition
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  ImageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
module.exports = Product;
