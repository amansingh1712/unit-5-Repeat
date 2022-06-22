var arguments = process.argv;
console.log('arguments:', arguments)


var calculator = require("./calculator");
if (arguments[2] == "add") {
    console.log(calculator.add(arguments[3], arguments[4]));

}

if (arguments[2] == "sub") {
    console.log(calculator.sub(arguments[3], arguments[4]));

}
if (arguments[2] == "sin") {
    console.log(calculator.sin(arguments[3]));
}
if (arguments[2] == "cos") {
    console.log(calculator.cos(arguments[3]));
}
if (arguments[2] == "tan") {
    console.log(calculator.tan(arguments[3]));
}


let cr = require("crypto");

if (arguments[2] == "random") {
    console.log(cr.randomInt(1, 100))

}