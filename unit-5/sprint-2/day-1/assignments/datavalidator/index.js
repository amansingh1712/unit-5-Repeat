const express = require('express');
const fs = require('fs');

const { body, validationResult } = require("express-validator");

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json())



app.get('/', (req, res) => {
    res.send("Home Page")
});

app.post("/movies", [
    body("id", "id is absent").contains(),
    body("id", "id should be a number").isNumeric(),
    body("name", "name is absent").contains(),
    body("name", "name should be a string").isString(),
    body("rating", "rating is absent").contains(),
    body("rating", "rating shoiuld be anumber").isNumeric(),
    body("description", "description is absent").contains(),
    body("description", "description should be a string").isString(),
    body("genre", "genre is absent").contains(),
    body("genre", "genre should be a string").isString(),
    body("cast", "cast is absent").contains(),
    body("cast", "cast should be a string").isString(),

], (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    fs.readFile("./db.json", { encoding: "utf8" }, (err, data) => {

        const parsed = JSON.parse(data)

        parsed.movies = [...parsed.movies, req.body]

        fs.writeFile("./db.json", JSON.stringify(parsed), { encoding: 'utf8' }, (err) => {
            console.log(req.body);
            res.send(req.body)
        })

    })

});


app.listen(3000, () => {
    console.log('listening on port 3000')
})