


type User = {
    id: Number;
    name: String;
    age: Number;
    salary: Number;
}


const user1: User[] = [{
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
}]

enum sub {
    physics = "physics",
    chemistry = "chemistry",
    maths = "maths",
}
type Teachers = {
    id: Number,
    name: String,
    subject: sub,
    students: Number
}


const teachers: Teachers[] = [
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
    }];

function sort<T>(arr: T[], x: keyof T): T[] {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][x] < arr[j][x]) {

                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

            }
        }
    }

    return arr;
}

let result = sort(user1, "id");

let result2 = sort(teachers, "id");

let result3 = sort(user1, "salary")

console.log(result, result2, result3)

