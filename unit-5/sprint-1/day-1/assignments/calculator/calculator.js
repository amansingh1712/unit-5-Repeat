exports.add = function (a, b) {
    return Number(a) + Number(b);
};
exports.sub = function (a, b) {
    return Number(a) - Number(b);
};


exports.mul = function (a, b) {
    return Number(a) * Number(b);
}

exports.div = function (a, b) {
    return Number(a) / Number(b);
}
exports.sin = function (a) {
    return Math.sin((a * Math.PI) / 180);
}
exports.cos = function (a) {
    return Math.cos((a * Math.PI) / 180);
}
exports.tan = function (a) {
    return Math.tan((a * Math.PI) / 180);
}