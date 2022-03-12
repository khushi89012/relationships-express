

const mongoose = require("mongoose");


//foreign keys ---> is used to connect two different collections by a common attribute

const bookSchema = new mongoose.Schema({
    name: {type: String, required: true},
    body: {type: String, required: true},

    //relationship between book and section :- 1 to many
    section_id: {type: mongoose.Schema.Types.ObjectId, ref: "sections", required: true},   //ObjectId is mongo ID   

    // //relationship between book and author :- many to many
    author_ids: [{type: mongoose.Schema.Types.ObjectId, ref: "authors", required: true}]

}, {
    versionKey: false,
    timestamps: true,
});


module.exports = mongoose.model("books", bookSchema);