const express = require("express");


// const { SignUpController } = require("../controllers/SignUpController");
const router = express.Router();

const { register, login, forgetPassword , resetpassword} = require("../controllers/LoginController");


// router.route("/login").get(login);

router.post('/register', register);
router.post('/login', login );
router.post('/forget-password', forgetPassword);
router.get('/reset-password', resetpassword);


module.exports = router