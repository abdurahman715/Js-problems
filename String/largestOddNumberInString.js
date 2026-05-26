//1903-Largest odd number in string
function largestOddNumber(num) {
  let n = num.length - 1;
  while (n >= 0) {
    if (Number(num[n]) % 2 == 1) {
      return num.substring(0, n + 1);
    }
    n--;
  }
  return "";
}
let num = "4412";
let result = largestOddNumber(num);
console.log(result);
