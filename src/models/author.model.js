

const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},

}, {
    versionKey: false,  //removes __v
    timestamps: true,  //createdAt , updatedAt
});


module.exports = mongoose.model("authors", authorSchema);