//5-Check if array is sorted or not
function isSorted(nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      return false;
    }
  }
  return true;
}
// let nums = [4, 2, 9, 1, 0, 6];
// console.log(isSorted(nums));
//T = O(n) S = O(1)

function isSortedBoth(nums) {
  let ascending = true;
  let descending = true;
  for (let i = 1; i < nums.length; i++) {
    if (arr[i] < arr[i - 1]) {
      ascending = false;
    }
    if (arr[i] > arr[i - 1]) {
      descending = false;
    }
  }
  if (ascending || descending) {
    if (ascending) {
      return "Array is sorted in ascending order";
    } else if (descending) {
      return "Array is descending";
    }
  } else {
    return "Array is not sorted";
  }
}
let arr = [9, 8, 2, 6];
console.log(isSortedBoth(arr));
