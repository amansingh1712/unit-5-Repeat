const { Router } = require("express");


const NoteModel = require("../models/Notes");


const noteRouter = Router();

noteRouter.get("/:userId/notes", async (req, res) => {


    const userId = req.params.userId;
    console.log('userId:', userId);

    const notes = await NoteModel.find({ userId });
    res.send(notes);
});


noteRouter.post("/:userId/notes", async (req, res) => {


    const userId = req.params.userId;
    console.log('userId:', userId);

    let payload = {

        ...req.body,

        userId
    };


    const task = await new NoteModel(payload);

    task.save((err, success) => {
        if (err) {

            return res.status(500).send({ message: "error occurred while task saving to db" });

        }

        return res.status(201).send(success);

    })

});


module.exports = noteRouter;




