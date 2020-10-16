export const sumSquareDiff = (num) => {
  var sumSquares = 0;
  var sum = 0;
  for(var i = 1; i <= num; ++i){
    sumSquares += (i * i);
    sum += i;
  }
  return ((sum * sum) - sumSquares);
}