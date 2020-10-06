import {sumThreeFive} from "../src/problem1.js";
// const { describe } = require("yargs");
// const { test, expect } = require("@jest/globals");

test("it should sum multiples of 3 and 5", () => {
  const output = sumThreeFive(10);
  expect(output).toEqual(23)
});

test("it should sum multiples of 3 and 5 to 1000", () => {
  const output = sumThreeFive(1000);
  expect(output).toEqual(233168)
});
