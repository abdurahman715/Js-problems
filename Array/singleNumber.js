//136-Single number
//Approach-1
function singleNumber(nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] == 1) {
      return nums[i];
    }
  }
}
let nums = [1, 2, 3, 4, 5, 2, 3, 4, 5];
let result = singleNumber(nums);
console.log(result);
