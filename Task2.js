// 2.a=========creates a function =========

function squareRootOfSumOfSquares(numbers) {
    var sumOfSquares = 0;
  
    for (var number of numbers) {
      sumOfSquares += number * number;
    }
  
    var squareRoot = Math.sqrt(sumOfSquares);
    return squareRoot;
  }
  
//2.b============implement the function =========

var numbers = [1, 2, 3, 4, 5];

for (var number of numbers) {
  var square = number * number;
  console.log(square);
}