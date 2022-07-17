const sum = require("../sum_arguments.js");


test("testing add[1,2,4,5,6] expected 18", () => {
    expect(sum(1, 2, 4, 5, 6)).toBe(18);
})
test("testing add[50,40,60,18,18,14] expected 200", () => {
    expect(sum(50, 40, 60, 18, 18, 14)).toBe(200);
})
test("testing add[1,2,3,4,5,6,7,8,9,10] expected 55", () => {
    expect(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(55);
})
test("testing add[15,45,75,15,6] expected 156", () => {
    expect(sum(15, 45, 75, 15, 6)).toBe(156);
})