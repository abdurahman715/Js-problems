//2-Find smallest element in an array
function smallestNumber(nums) {
  let smallest = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < smallest) {
      smallest = nums[i];
    }
  }
  return smallest;
}
let nums = [4, 2, 9, 1, 0, 6];
console.log(smallestNumber(nums));
//T = O(n),S = O(1);
