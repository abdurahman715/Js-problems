//Sum of first n numbers
function sumOfNumbers(n) {
  if (n === 0) {
    return 0;
  }
  return n + sumOfNumbers(n - 1);
}
let n = 2;
let result = sumOfNumbers(n);
console.log(result);
