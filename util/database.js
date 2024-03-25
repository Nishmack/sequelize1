const mysql = require("mysql2");
const pool = mysql.createPool({
  //pass db object with some info about db engine
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "nishma@99",
});
module.exports = pool.promise(); //export pool
