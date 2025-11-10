const express = require("express");
const router = express.Router();
const ecartpay = require("@api/ecartpay");

router.post("/", async (req, res) => {
  const { publicKey, privateKey } = req.body;
  console.log(publicKey, ":", privateKey);

  if (!publicKey || !privateKey) {
    return res.status(400).json({ message: " Missing credentials" });
  }

  try {
    ecartpay.auth(publicKey, privateKey);
    ecartpay.createToken().then(({ data }) => {
      res.status(200).json(data);
      console.log(data);
    });
  } catch (err) {
    console.log("Authentication error");
    res.status(500).json({ message: "Authentication error" });
  }
});

module.exports = router;
