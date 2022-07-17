

const timeConversion = require("../time_conversion.js");

test(" time 60000 miliseconds expected to be 1 minute", () => {
    expect(timeConversion(60000)).toBe("1 minute");
});

test("time 120000 miliseconds to be 2 minutes", () => {
    expect(timeConversion(120000)).toBe("2 minutes");

})
test("time 3540000 miliseconds to be 59 minutes", () => {
    expect(timeConversion(3540000)).toBe("59 minutes");

})
test("time 3599999 miliseconds to be 59 minutes 59 seconds", () => {
    expect(timeConversion(3599999)).toBe("59 minutes 59 seconds");

})
test("time 3600000 miliseconds to be 1 hour", () => {
    expect(timeConversion(3600000)).toBe("1 hour");

})
test("time 3600000 miliseconds to be 2 hours", () => {
    expect(timeConversion(7200000)).toBe("2 hours");

})