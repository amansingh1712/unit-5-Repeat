

let express = require('express');
let fs = require('fs');
let dns = require('dns');

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get("/", (req, res) => {
    res.send("Home Page");
})
app.get("/products", (req, res) => {
    fs.readFile("./products.json", { encoding: "utf-8" }, (req, data) => {
        console.log(data.products);
        let product = JSON.parse(data);
        console.log(product.products);
        res.send(JSON.stringify(product.products));
    })

})
app.post("/products/create", (req, res) => {


    fs.readFile("./products.json", { encoding: "utf-8" }, (err, data) => {

        const parsed = JSON.parse(data);

        parsed.products = [...parsed.products, req.body];

        fs.writeFile("./products.json", JSON.stringify(parsed), { encoding: "utf-8" }, (err) => {
            res.send(req.body);
        });
    })

});


app.delete("/products/:id", (req, res) => {


    const { id } = req.params;


    fs.readFile("./products.json", { encoding: "utf-8" }, (err, data) => {

        const parsed = JSON.parse(data);

        parsed.products = parsed.products.filter(el => el.id != id);

        fs.writeFile("./products.json", JSON.stringify(parsed), { encoding: "utf-8" }, (err) => {
            res.send(JSON.parse(data).products.filter(el => el.id === id));
        });
        res.send("deleted");

    })
});

app.patch("/products/:id", (req, res) => {


    const { id } = req.params;


    fs.readFile("./products.json", { encoding: "utf-8" }, (err, data) => {

        const parsed = JSON.parse(data);
        parsed.products = [...parsed.products, req.body];

        fs.writeFile("./products.json", JSON.stringify(parsed), { encoding: "utf-8" }, (err) => {
            res.send(req.body);
        });
    })
});


app.post("/getmeip", (req, res) => {



    fs.readFile("./website.json", { encoding: "utf-8" }, (err, data) => {

        const parsed = JSON.parse(data);
        // console.log('parsed:', parsed)

        const website = parsed.websites[0].website;
        // console.log('website:', website)

        let web = dns.lookup(website, function (err, addresses, family) {
            console.log(addresses)
        })


    })
})

app.listen(8080, () => {
    console.log('listening on port 8080');
})


