let fs = require('fs');


exports.read = function (path) {
    fs.readFile(path, { encoding: "utf8" }, function (err, data) {
        console.log(data);
    })
}

exports.append = function (content, path) {
    fs.appendFile(path, content, (err, data) => {
        if (err) {
            console.log('err:', err)

        }

    })
};

exports.delete = function (file) {
    fs.rm(file, (err) => { });
}

exports.rename = function (file, newFileName) {
    fs.rename(file, newFileName, (err) => {
        console.log('err:', err)

    });
}

exports.create = function (file) {
    fs.open(file, "w", (err) => {
        console.log('err:', err)

    });
}




// exports.list = function () {
//     fs.readdir("../file_editor", (err, files) => {
//         console.log('err:', err)
//         files.forEach(file => {
//             console.log('file1:', file)
//         })
//     });
// }


let path = require("path");
let dirName = "../" + path.basename(__dirname)
// console.log('dirName:', dirName);

// exports.list = function () {
//     fs.readdir(dirName, (err, files) => {
//         files.forEach(file => {
//             console.log('file2:', file)
//         })
//     });
// }

exports.list = function () {
    fs.readdir(dirName, (err, files) => {
        files.forEach(file => {
            if (fs.lstatSync(path.resolve(dirName, file)).isDirectory()) {
                console.log('Directory1:', file);
            } else {
                console.log('File3:', file);
            }
        });
    });
}



