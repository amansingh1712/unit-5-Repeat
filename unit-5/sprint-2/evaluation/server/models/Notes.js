const mongoose = require("mongoose");


const noteSchema = mongoose.Schema({
    title: String,
    note: String,
    label: String,
})


const NoteModel = mongoose.model("note", noteSchema);

module.exports = NoteModel;