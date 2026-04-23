//268-Missing number
function missingNumber(nums) {
  let n = nums.length;
  let totalSum = (n * (n + 1)) / 2;
  let partialSum = 0;
  let i;
  for (i = 0; i < n; i++) {
    partialSum += nums[i];
  }
  return totalSum - partialSum;
}
let nums = [0, 1, 3, 4, 5, 6];
let output = missingNumber(nums);
console.log(output);
