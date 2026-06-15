//69-sqrt(x)
//Approach-1
function mySqrt(x) {
  if (x == 0) {
    return 0;
  } else if (x == 1) {
    return 1;
  }
  for (let i = 2; i < x; i++) {
    let squareVal = i * i;
    if (squareVal > x) {
      return i - 1;
    }
  }
}
let x = 16;
let result = mySqrt(x);
console.log(result);

//Approach-2 Binary search
function mySqrt(x) {
  if (x < 2) {
    return x;
  }
  let left = 2;
  let right = Math.floor(x / 2);
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (x == mid ** 2) {
      return mid;
    } else if (x < mid ** 2) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right;
}
