import { start } from "repl"

export const sumThreeFive = (maxNumber) => {
  var sum = 0;
  for (var i = 1; i < maxNumber; ++i) {
    if(i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum
}