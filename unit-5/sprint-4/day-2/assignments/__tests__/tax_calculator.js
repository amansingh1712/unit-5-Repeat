
const taxCalci = require("../tax_calculator.js");

test("amount is 700000,expected tax be 65000", () => {
    expect(taxCalci(700000)).toBe(65000)
});

test("amount is 1200000,expected tax be 185000", () => {
    expect(taxCalci(1200000)).toBe(185000)
});

test("amount is 400000,expected tax be 15000", () => {
    expect(taxCalci(400000)).toBe(15000)
});

test("amount is 200000,expected tax be 0", () => {
    expect(taxCalci(200000)).toBe(0)
});

test("amount is 250000,expected tax be 0", () => {
    expect(taxCalci(250000)).toBe(0)
});

test("amount is 500000,expected tax be 25000", () => {
    expect(taxCalci(500000)).toBe(25000)
});

test("amount is 1000000,expected tax be 125000", () => {
    expect(taxCalci(1000000)).toBe(125000)
});

