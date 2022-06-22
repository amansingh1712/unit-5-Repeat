var arguments = process.argv;
// console.log('arguments:', arguments);



let editor = require('./editor');

if (arguments[2] == "read") {
    editor.read(arguments[3]);
}
if (arguments[2] == "append") {
    editor.append(arguments[3], arguments[4]);
}
if (arguments[2] == "delete") {
    editor.delete(arguments[3]);
}
if (arguments[2] == "create") {
    editor.create(arguments[3]);
}
if (arguments[2] == "rename") {
    editor.rename(arguments[3], arguments[4]);
}
if (arguments[2] == "list") {
    editor.list();
}


