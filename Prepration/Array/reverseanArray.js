//6-Reverse an array
function reverse(nums) {
  let len = nums.length;
  let halfLen = Math.floor(len / 2);
  for (let i = 0; i < halfLen; i++) {
    let temp = nums[i];
    nums[i] = nums[len - i - 1];
    nums[len - i - 1] = temp;
  }
  return nums;
}
let nums = [1, 2, 4, 5, 6];
console.log(reverse(nums));
//T = O(n) , S = O(1)
