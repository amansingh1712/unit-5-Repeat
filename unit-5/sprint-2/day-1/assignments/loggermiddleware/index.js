
const express = require('express');

const morgan = require('morgan');

const app = express();


app.use(morgan(`:method :status :res[content-length]  :response-time ms [:date[clf]] HTTP/:http-version :url \n`))

// app.use(morgan("dev"));


app.get("/home", (req, res) => {
    res.send("Home Page");

});

app.listen(3000, () => {
    console.log("listening on port 3000")
})