var user1 = [{
        id: 1,
        name: "Jonell",
        age: 25,
        salary: 60000
    }, {
        id: 2,
        name: "Clevey",
        age: 35,
        salary: 55500
    }, {
        id: 3,
        name: "Cullin",
        age: 3,
        salary: 45000
    }, {
        id: 4,
        name: "Thomasina",
        age: 44,
        salary: 40000
    }, {
        id: 5,
        name: "Fraser",
        age: 55,
        salary: 35000
    }];
var sub;
(function (sub) {
    sub["physics"] = "physics";
    sub["chemistry"] = "chemistry";
    sub["maths"] = "maths";
})(sub || (sub = {}));
var teachers = [
    {
        id: 1,
        name: "Jonell",
        students: 12,
        subject: sub.physics
    }, {
        id: 2,
        name: "Clevey",
        students: 25,
        subject: sub.chemistry
    }, {
        id: 3,
        name: "Cullin",
        students: 12,
        subject: sub.physics
    }, {
        id: 4,
        name: "Thomasina",
        students: 12,
        subject: sub.maths
    }, {
        id: 5,
        name: "Fraser",
        students: 56,
        subject: sub.maths
    }
];
function sort(arr, x) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[i][x] < arr[j][x]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
var result = sort(user1, "id");
var result2 = sort(teachers, "id");
var result3 = sort(user1, "salary");
console.log(result, result2, result3);
