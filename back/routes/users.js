const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("this is a user route");
});



module.exports = router;
