//12-Rotate array by k positions
function rotateByK(arr, k) {
  let n = arr.length;
  k = k % n; // Handle k > n
  for (let j = 0; j < k; j++) {
    let last = arr[n - 1];
    for (let i = n - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = last;
  }
  return arr;
}
console.log(rotateByK([1, 2, 3, 4, 5], 2));
