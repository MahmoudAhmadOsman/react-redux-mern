const mongoose = require("mongoose");
//Order Schema
const Schema = mongoose.Schema;
const OrderSchema = new Schema(
  {
    id: {
      type: String,
      default: shortid.generate,
    },
    name: String,
    email: String,
    address: String,
    total: Number,
    cartItems: [
      {
        id: String,
        title: String,
        price: Number,
        count: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
