import { start } from "repl"

export const sumEvenFib = () => {
  var sum = 0;
  var lastTerm = 1
  var secondTerm = 0
  var current = 0
  while (current <= 4000000) {
    var current = (lastTerm + secondTerm)
    secondTerm = lastTerm
    lastTerm = current
    if (current % 2 === 0) {
      sum += current;
    }
  }
  console.log(sum)
  return sum
}