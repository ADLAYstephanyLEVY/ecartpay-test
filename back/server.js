const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("root node");
});

const authRoute = require("./routes/auth");

app.use(express.json());

app.use("/auth", authRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
