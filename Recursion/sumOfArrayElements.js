//Sum of array elements using Recursion
let arr = [5, 3, 4, 1, 2];
function sumOfElements(n) {
  if (n === 0) {
    return arr[0];
  }
  return arr[n] + sumOfElements(n - 1);
}
let sum = sumOfElements(arr.length - 1);
console.log(sum);
