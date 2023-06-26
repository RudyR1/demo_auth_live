const Joi = require("joi");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const options = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  time: 5,
  parellelism: 1
};

const hashPassword = (password) => {
  return argon2.hash(password, options);
}

const checkPassword = (hash, pwd) => {
  return argon2.verify(hash, pwd);
}

const authSchema = () => {
  return Joi.object({
    firstname: Joi.string(),
    lastname: Joi.string(),
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required()
  })
}

const checkUserData = (req, res, next) => {
  const { error } = authSchema().validate(req.body, { abortEarly: false })

  if (error) {
    res.status(401).json({ msg: "Invalid user" })
  } else {
    next();
  }
}

const checkCredits = (req, res, next) => {
  if (req.cookies) {
    jwt.verify(
      req.cookies.user_token,
      process.env.JWT_SECRET,
      (err, decode) => {
        if (err) {
          res.status(401).json({ msg: "Sorry, you must be authenticated to access this resource." })
        } else {
          req.user_token = decode;
          // console.log(req.user_token);
          // res.status(200).json({ msg: "yeah, you're in." })
          next();
        }
      }
    );
  } else {
    res.status(401).json({ msg: "Sorry, wrong credits" });
  }
}

module.exports = {
  checkUserData,
  hashPassword,
  checkPassword,
  checkCredits
};