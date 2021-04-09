const express = require("express");
const router = express.Router();

//Controllers
const signupController = require("../controller/SignupController/signupController");
const loginController = require("../controller/LoginController/loginController");

//#region Route for signup users
router.post("/signup", signupController.signup);
//#endregion

//#region Routes for login user
router.post("/login", loginController.login);
//#endregion

module.exports = router;
