const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    "name": {
        type: String,
        required: [true, "Name is a required Field"],
    },
    "description": String,
    "processed": Boolean,
    "picture": Array,
});

module.exports = mongoose.model("Item", ItemSchema);