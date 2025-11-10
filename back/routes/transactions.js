const express = require("express");
const router = express.Router();
const ecartpay = require("@api/ecartpay");
const verifyToken = require("../middleware/middleware");

router.get("/", verifyToken, async (req, res) => {
  const authToken = req.headers["authorization"];
  console.log("Transactions token", authToken);

  try {
    const response = await ecartpay.get_apitransactionssummary({
      Authorization: authToken,
    });

    res.status(200).json(response.data);
    console.log("Response Get Transactions Summary", response.data);
  } catch (err) {
    console.log("Error getting summary", err);
    res.status(500).json({ message: "Error getting transactions" });
  }
});

router.get("/all", verifyToken, async (req, res) => {
  const authToken = req.headers["authorization"];
  console.log("show token in all transactions", authToken);

  try {
    const response = await ecartpay.get_apitransactions({
      Authorization: authToken,
    });
    res.status(200).json(response.data);
    console.log("Response from All Transactions", response.data);
  } catch (err) {
    conosle.log("Error in fetchin all transactions", err);
    res.status(500).json({ message: "Error fetchin all transactions" });
  }
});

module.exports = router;
