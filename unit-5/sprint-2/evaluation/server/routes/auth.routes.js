const { Router } = require("express");


const UserModel = require("../models/User");


const authRouter = Router();

authRouter.post("/signup", async (req, res) => {
    console.log(req.body);

    const user = await new UserModel(req.body);


    user.save((err, succes) => {

        if (err) {
            res.status(500).send({ message: "errro occurred while signup" });
        }
        return res.status(201).send({ message: "signup succes", token: 12345 });

    })

});

authRouter.post("/login", async (req, res) => {
    console.log(req.body);


    const checkUser = await UserModel.find(req.body);



    if (checkUser.length > 0) {
        let { name, _id } = checkUser[0];

        let payload = {
            _id,
            name,

            token: 12345

        }
        res.send(payload);
    }


})

module.exports = authRouter;
