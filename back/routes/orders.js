const express = require("express");
const router = express.Router();
const ecartpay = require("@api/ecartpay");
const verifyToken = require("../middleware/middleware");

// [POST] /api/order
router.post("/", verifyToken, async (req, res) => {
  const { currency, email, first_name, items, last_name } = req.body;

  const authToken = req.ecartpayToken;
  console.log("Token in checkout", authToken);

  try {
    const response = await ecartpay.createOrder(
      { items, email, currency, first_name, last_name },
      { authToken }
    );

    res.status(200).json(response.data);
    console.log(response.data);
  } catch (err) {
    console.log("Error creating order", err);
    res.status(500).json({ message: "Error creating order" });
  }
});

module.exports = router;
