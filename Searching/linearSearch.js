function linearSearch(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
}
let nums = [1, 7, 2, 6, 3, 5, 4];
let target = 4;
let result = linearSearch(nums, target);
console.log(result);
