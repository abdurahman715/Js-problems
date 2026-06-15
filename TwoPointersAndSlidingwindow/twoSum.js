//1-Two Sum
//Approach-1
function twoSum(arr, target) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let sum = arr[i] + arr[j];
      if (sum === target) {
        return [i, j];
      }
    }
  }
}

//Approach-2
function twoSum(arr, target) {
  let n = arr.length;
  let map = {};
  for (let i = 0; i < n; i++) {
    map[arr[i]] = i;
  }
  for (let i = 0; i < n; i++) {
    let pairtoFind = target - arr[i];
    if (map[pairtoFind] && map[pairtoFind] != i) {
      return [i, map[pairtoFind]];
    }
  }
}

let nums = [1, 3, 2, 5];
let result = twoSum(nums, 4);
console.log(result);
