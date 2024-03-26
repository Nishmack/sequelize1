const db = require("../util/database"); //import pool obj from db.js file

const Cart = require("./cart");

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    //insert data from database
    return db.execute(
      "INSERT INTO products(title, price, imageUrl, description) VALUES (?, ?, ?, ?)",
      [this.title, this.price, this.imageUrl, this.description]
    );
  }

  static deleteById(id) {
    return db.execute("DELETE FROM products WHERE id = ?", [id]);
  }

  static fetchAll() {
    // retrieve data from database
    return db.execute("SELECT * FROM products");
  }

  static findById(id) {
    //find single product by id.fetch a single product by id
    return db.execute("SELECT * FROM products WHERE products.id = ?", [id]);
  }
};
