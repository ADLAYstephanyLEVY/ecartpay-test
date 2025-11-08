const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    sku: { type: String, required: true },
    price: { type: Number, min: 0 },
    stock: { type: Number, min: 0 },
    description: { type: String, default: "High-quality jewerly" },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;