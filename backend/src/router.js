const express = require("express");

const router = express.Router();

const authControllers = require("./controllers/authControllers");
const userControllers = require("./controllers/userControllers");

const { checkUserData, checkCredits } = require("./services/checkAuth");


router.post("/login", authControllers.login);
router.post("/signup", checkUserData, authControllers.signup);

// router.get("/users/", checkCredits, userControllers.getAll);
router.get("/users/:id", checkCredits, userControllers.getOne);


module.exports = router;
