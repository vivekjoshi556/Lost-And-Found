const mongoose = require("mongoose");

const ClaimSchema = new mongoose.Schema({
    "_id": {
        type: String,
        required: [true, "Invalid Request"],
    },
    "item_id": {
        type: String,
        required: [true, "Invalid Request"],
    },
    "from_id": {
        type: String, 
        required: [true, "Invalid Request"],
    },
    "timestamp": {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model("Claim", ClaimSchema);