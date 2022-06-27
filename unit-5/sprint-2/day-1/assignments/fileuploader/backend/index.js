const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());

const path = require('path');


const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "upload");
    },
    filename: (req, file, callback) => {
        console.log(file);
        callback(null, Date.now() + path.extname(file.originalname));

    },
})


const upload = multer({ storage: storage });


app.set("view engine", "ejs");

app.get("/upload", (req, res) => {
    res.render("upload");
})
app.get("/upload/single", (req, res) => {
    res.render("upload");
})
app.get("/upload/multiple", (req, res) => {
    res.render("upload");
})

app.post("/upload/single", upload.single("image"), (req, res) => {
    console.log(req.file);
    res.send("Single Image uploaded successfully");
});

app.post("/upload/multiple", upload.array("images", 10), (req, res) => {
    console.log(req.files);
    res.send("Multiple  Image uploaded successfully");
});

app.listen(3000, () => {
    console.log("listening on http://localhost:3000");
})