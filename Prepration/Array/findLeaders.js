//Find all leaders in an array
function leaders(nums) {
  let leadGroup = [];
  let maxRight = nums[nums.length - 1];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      leadGroup.push(nums[i]);
    }
  }
  leadGroup.push(maxRight);
  return leadGroup;
}
let nums = [16, 17, 4, 3, 5, 2];
console.log(leaders(nums));
//T = O(n) , S = O(n)
