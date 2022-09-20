const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
    "user1": {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: [true, "Invalid Request"],
    },
    "user2": {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: [true, "Invalid Request"],
    },
    "message": {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
    }
}, { timestamps: true })

//! Not working as expected check why.
ChatSchema.index({ user1: 1, user2: 1 }, { unique: true });

module.exports = mongoose.model("Chat", ChatSchema);