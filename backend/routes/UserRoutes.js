const express = require("express");
const router = express.Router();
const { UserController } = require("../controllers/UserController");

router.post("/updateProfile/:id", UserController.updateProfile);
router.post("/updatePassword/:id", UserController.updatePassword);

module.exports = router