//231-Power of Two
function isPowerOfTwo(n) {
  if (n === 1) {
    return true;
  } else if (n % 2 != 0 || n < 1) {
    return false;
  }
  return isPowerOfTwo(n / 2);
}
let n = 16;
let result = isPowerOfTwo(n);
console.log(result);
