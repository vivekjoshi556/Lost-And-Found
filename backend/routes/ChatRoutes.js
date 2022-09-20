const express = require("express");
const router = express.Router();
const { ChatController } = require("../controllers/ChatController");

router.post("/startChat/:userId", ChatController.startChat);
router.get("/getChatList", ChatController.getChatList);
router.post("/sendMessage/:chatId", ChatController.sendMessage);
router.post("/getMessage/:chatId", ChatController.getMessage);

module.exports = router;