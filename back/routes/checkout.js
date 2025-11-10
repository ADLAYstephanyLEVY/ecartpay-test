const express = require("express");
const router = express.Router();
const ecartpay = require("@api/ecartpay");
const verifyToken = require("../middleware/middleware");

// [POST] /api/checkout
router.post("/", verifyToken, async (req, res) => {
  const { amounts, concept, currency } = req.body;

  const authToken = req.headers["authorization"];

  console.log("Checkout Token:", authToken);

  try {
    const response = await ecartpay.createCheckout(
      {
        amounts: amounts,
        currency: currency,
        concept: concept,
      },
      {
        Authorization: authToken,
      }
    );
    console.log(response);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
