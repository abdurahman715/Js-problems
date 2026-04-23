//485-Max consicutive ones
function maxOnes(nums) {
  let currentCount = 0;
  let maxCount = 0;
  let i;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      currentCount++;
    } else {
      maxCount = Math.max(currentCount, maxCount);
      currentCount = 0;
    }
  }
  return Math.max(currentCount, maxCount);
}
let nums = [1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1];
let maxCount = maxOnes(nums);
console.log(maxCount);
