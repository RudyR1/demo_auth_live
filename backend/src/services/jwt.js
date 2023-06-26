const jwt = require("jsonwebtoken");

const createJwt = (payload) => {

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
}

module.exports = { createJwt };