const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("root node");
});

// * Routes
const authRoute = require("./routes/auth");
const productsRoute = require("./routes/products");
const checkoutRoute = require("./routes/checkout");
const ordersRoute = require("./routes/orders");
const transactionsRoute = require("./routes/transactions");

app.use(express.json());

// * Set Routes
app.use("/auth", authRoute);
app.use("/products", productsRoute);
app.use("/checkout", checkoutRoute);
app.use("/orders", ordersRoute);
app.use("/transactions", transactionsRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// * Mongo Connection Config
const MONGODB_URI = process.env.MONGO_URI || "mongodb://localhost:27017/test";



mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Succesfully connected to MongoDB."))
  .catch((err) => console.error("Connection error", err));
