const express = require("express");
const router = express.Router();
const Product = require("../models/product-schema");
const verifyToken = require("../middleware/middleware");

// [GET] /api/products
router.get("/", verifyToken, async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.log("Error getting products");
    res.status(500).json({ message: "Internal server error" });
  }
});

// [POST] /api/products
router.post("/", verifyToken, async (req, res) => {
  try {
    console.log(req.body)
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    console.log("Error inserting product");
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
