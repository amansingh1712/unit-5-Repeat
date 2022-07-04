const express = require("express");

const connection = require("./db");

const cors = require("cors");



const authRouter = require("./routes/auth.routes");


const noteRouter = require("./routes/notes.routes")


require("dotenv").config();


const PORT = process.env.PORT;



const app = express();
app.use(cors());


app.use(express.json());
app.use("/auth", authRouter);

app.use("/user", noteRouter);


// app.get("/", (req, res) => {
//     res.send("Home Page");
// })



app.listen(PORT, async () => {

    try {
        await connection;
    } catch (err) {
        console.log("error while connecting to db", err)
    }

    console.log(`server running on ${PORT}`);
})