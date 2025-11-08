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

// * Middleware
app.use(express.json());

// * Set Routes
app.use("/auth", authRoute);
app.use("/products", productsRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// * Mongo Connection Config
console.log(process.env.MONGO_URI);
const MONGODB_URI =
  "mongodb+srv://adlyfany_db_user:JaHlHynJzugWJq7V@cluster0.roivr8x.mongodb.net/";
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Conectado exitosamente a MongoDB."));
