//8-Find sum of all elements
function sumOfAllElements(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  return sum;
}
let nums = [1, 2, 4, 5];
console.log(sumOfAllElements(nums));
