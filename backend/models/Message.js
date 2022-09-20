const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    "chat_id": {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat",
        required: true,
    },
    "from_id": {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    "message": {
        type: String,
        required: [true, "No message found"],
    }
}, { timestamps: true })

module.exports = mongoose.model("Message", MessageSchema);