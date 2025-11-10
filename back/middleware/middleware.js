const ecartpay = require("@api/ecartpay");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  //  console.log("Extracted token middleware", authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access denied." });
  }

  const token = authHeader.split(" ")[1];
  console.log("Splited token inside middelware", token);

  if (!token) {
    return res.status(401).json({ message: "Token not provided" });
  }

  req.ecartpayToken = token;

  // Continue to the next route
  next();
};

module.exports = verifyToken;
