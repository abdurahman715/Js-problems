//11-Rotate array by one position
//Right rotation
function rotateOnePositionRight(nums) {
  let last = nums[nums.length - 1];
  for (let i = nums.length - 1; i > 0; i--) {
    nums[i] = nums[i - 1];
  }
  nums[0] = last;
  return nums;
}
//T = O(n),S = O(1)

//Left rotation
function rotateOnePositionLeft(nums) {
  let first = nums[0];
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i + 1];
  }
  nums[nums.length - 1] = first;
  return nums;
}
let nums = [1, 2, 4, 5, 6];
console.log(rotateOnePositionLeft(nums));
//T = O(n),S = O(1)
