const { hashPassword, checkPassword } = require("../services/checkAuth")
const models = require("../models");
const argon2 = require("argon2");
const { createJwt } = require("../services/jwt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const hash = await hashPassword(password);

  models.users
    .insert(firstname, lastname, email, hash)
    .then(() => {
      res.status(201).json({ msg: "user created" })
    })
    .catch(err => res.status(418).json({ msg: "Bad user data" }));
}



const login = async (req, res) => {

  const [user] = await models.users.findOne(req.body.email);

  if (user[0] && await checkPassword(user[0].hpassword, req.body.password)) {

    const token = createJwt({ email: req.body.email, id: user[0].id });

    res
      .status(200)
      .cookie("user_token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60)
      })
      .json({
        user_id: user[0].id,
        user_role: "admin"
      });
  } else {
    res.status(401).json({ msg: "not connected" });
  }
}



module.exports = { login, signup };