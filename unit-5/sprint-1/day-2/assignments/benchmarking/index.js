

let http = require('http');
let fs = require('fs');

// let fsPromises = fs.promises;

let server = http.createServer((req, res) => {


    if (req.url == "/") {
        res.end("hi");

    }


    if (req.url === "/textsync") {
        let data = fs.readFileSync("./test.txt", { encoding: "utf8" });
        res.end(data);
    }
    if (req.url === "/textasync") {

        fs.readFile("./test.txt", { encoding: "utf8" }, (err, data) => {
            res.end(data);

        });
    }
    if (req.url === "/textstream") {
        const readStream = fs.createReadStream("./test.txt", { encoding: "utf8" });
        readStream.pipe(res);

    }
    if (req.url === "/textpromise") {

        fs.promises.readFile("./test.txt", { encoding: "utf8" })
            .then((result) => {
                res.end(result);
            })
            .catch((err) => {
                console.log(err);
            })
    }


})


server.listen(3000, () => {
    console.log("listening on port 3000");
})