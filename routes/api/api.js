const express = require("express");
const router = express.Router();

//Bring the model
const Product = require("../../models/Product");

//Get All Products
app.get("/api/products", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

//Create a new product & save it into the database
app.post("/api/products", async (req, res) => {
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  res.send(savedProduct);
});

//Delete product
app.delete("/api/products/:id", async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deletedProduct);
});

module.exports = router;
