const express = require("express");
const router = express.Router();

//Bring the model
const Product = require("../models/Product");

//Get All Products
router.get("/api/products", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

//Create a new product & save it into the database
router.post("/api/products", async (req, res) => {
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  res.send(savedProduct);
});

//Delete product
router.delete("/api/products/:id", async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deletedProduct);
});

//Order POST API
router.post("/api/orders", async (req, res) => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.address ||
    !req.body.total ||
    !req.body.cartItems
  ) {
    return res.send({ message: "All fields are required!!" });
  }

  //Save the order into the database
  const order = await Order(req.body).save();
  res.send(order); //Now, send the order
});

module.exports = router;
