//sum of odd numbers in an array using recursion
let arr = [5, 3, 4, 1, 2];
function sumOfOddNumbers(n) {
  isOdd = arr[n] % 2 != 0;
  if (n == 0) {
    return isOdd ? arr[n] : 0;
  }
  return (isOdd ? arr[n] : 0) + sumOfOddNumbers(n - 1);
}
let sum = sumOfOddNumbers(arr.length - 1);
console.log(sum);
