const express = require("express");
const router = express.Router();
const ecartpay = require("@api/ecartpay");
const verifyToken = require("../middleware/middleware");

// [POST] /api/order
// create an order
router.post("/", verifyToken, async (req, res) => {
  const { email, name, items } = req.body;

  const authToken = req.ecartpayToken;
  console.log("Token in checkout", authToken);

  try {
    const response = await ecartpay.createOrder(
      {
        email: email,
        currency: "MXN",
        first_name: name,
        items: items
      },
      { Authorization: authToken }
    );

    res.status(200).json(response.data);
    console.log(response.data);
  } catch (err) {
    console.log("Error creating order", err);
    res.status(500).json({ message: "Error creating order" });
  }
});

module.exports = router;
