const express = require("express");
const ecartpay = require("@api/ecartpay");
const verifyToken = require("../middleware/middleware");
const router = express.Router();

router.get("/", verifyToken, async (req, res) => {
  const authToken = req.ecartpayToken;

  try {
    const response = await ecartpay.getAllActivity({
      Authorization: authToken,
    });

    res.status(200).json(response.data);
    console.log("Response", response.data);
  } catch (err) {
    console.log("Error gettin activity, review endpoint", err);
    res.status(500).json({ message: "Error getting activity" });
  }
});

module.exports = router;
