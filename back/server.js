const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1> Server Express.js up and running </h1>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
