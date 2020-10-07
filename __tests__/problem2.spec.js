import { sumEvenFib } from "../src/problem2.js";
// const { describe } = require("yargs");
// const { test, expect } = require("@jest/globals");

test("it should sum even fibonacci terms less than 4 million", () => {
  const output = sumEvenFib();
  expect(output).toEqual(4613732)
});