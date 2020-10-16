import { sumSquareDiff } from "../src/problem6.js";

test("it should find the difference between sum of squares, and squared sum of first 10 nums", () => {
  const output = sumSquareDiff(10);
  expect(output).toEqual(2640)
});

test("it should find the difference between sum of squares, and squared sum of first 100 nums", () => {
  const output = sumSquareDiff(100);
  expect(output).toEqual(25164150)
});