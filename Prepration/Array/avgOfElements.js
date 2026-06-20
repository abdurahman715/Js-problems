//9-Find average of elements
function avgOfElements(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  let avg = sum / nums.length;
  return avg;
}
let nums = [1, 2, 4, 5];
console.log(avgOfElements(nums));
