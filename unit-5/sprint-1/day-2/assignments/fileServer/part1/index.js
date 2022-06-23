

let http = require('http');
let fs = require('fs');



let server = http.createServer((req, res) => {


    if (req.url === "/") {
        fs.readdir("../part1", (err, files) => {
            console.log('err:', err)
            files.forEach(file => {
                res.write(file);
                res.write('\n');
            })
            res.end();
        });
    }
    if (req.url === "/public") {
        fs.readdir("../part1/public", (err, files) => {
            console.log('err:', err)
            files.forEach(file => {
                res.write(file);
                res.write('\n');
            })
            res.end();
        });
    }
    if (req.url === "/public/other") {
        fs.readdir("../part1/public/other", (err, files) => {
            console.log('err:', err)
            files.forEach(file => {
                res.write(file);
                res.write('\n');
            })
            res.end();
        });
    }




})


server.listen(3000, () => {
    console.log("listening on port 3000");
})