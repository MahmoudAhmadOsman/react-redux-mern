const mongoose = require("mongoose");
const shortid = require("shortid");
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  id: {
    type: String,
    default: shortid.generate,
  },
  title: String,
  description: String,
  image: String,
  price: Number,
  availableSizes: [String],
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
