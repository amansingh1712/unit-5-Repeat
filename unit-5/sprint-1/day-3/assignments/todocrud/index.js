const express = require("express");
const fs = require("fs");
const { stringify } = require("querystring");

const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//get todo
app.get("/", (req, res) => {
    // res.send("home page");

    fs.readFile("./db.json", { encoding: "utf-8" }, (err, data) => {
        if (err) {
            res.send(err.message)
        }

        res.send(data)
    });
})

//create todo
app.post("/", (req, res) => {
    // res.send("todo added");

    fs.readFile("./db.json", { encoding: "utf-8" }, (err, data) => {

        const parsed = JSON.parse(data);
        parsed.todos = [...parsed.todos, { ...req.body, id: uuidv4() }];

        fs.writeFile("./db.json", JSON.stringify(parsed), { encoding: "utf-8" }, (err) => {
            if (err) {
                res.send(err.message);
            }
            res.send(req.body);
        });


    });
});


//delete todo
app.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.send("todo deleted");

    fs.readFile("./db.json", { encoding: "utf-8" }, (err, data) => {
        const parsed = JSON.parse(data);
        console.log('parsed:', parsed)
        parsed.todos = parsed.todos.filter((el) => el.id !== id);
        console.log('parsed:', parsed)

        fs.writeFile("./db.json", JSON.stringify(parsed), { encoding: "utf-8" }, (err) => {
            if (err) {
                res.send(err.message);
            }
            res.send("deleted todo");
        })
    })


});



//update todo
app.patch("/:id", (req, res) => {
    // res.send("todo updated");
    const { id } = req.params;

    fs.readFile("./db.json", { endcoding: "utf-8" }, (err, data) => {
        const parsed = JSON.parse(data);

        parsed.todos = [...parsed.todos, { ...parsed.todos.find((el) => el.id === id), ...req.body }];

        fs.writeFile("./db.json", JSON.stringify(parsed), (err) => {
            res.send("updated")
        })
    })

})

app.listen(8080, () => {
    console.log("listening on port 8080");
})