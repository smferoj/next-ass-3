
// 3.a=========creates a function =========
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }

 //3.b============implement the function =========

 function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }


 var number = 13;
var result = isPrime(number);
console.log(result); // Output: true