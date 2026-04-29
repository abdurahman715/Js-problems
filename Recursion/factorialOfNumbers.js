//Factorial fo n numbers
function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
let n = 5;
let result = factorial(n);
console.log(result);
