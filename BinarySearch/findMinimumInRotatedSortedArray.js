//153-Find minimum in rotated sorted array
function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    //if searching space is sorted
    if (nums[left] <= nums[right]) {
      return nums[left];
    }
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < nums[mid - 1]) {
      return nums[mid];
    }
    //if left half is not sorted
    if (nums[left] > nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
}
