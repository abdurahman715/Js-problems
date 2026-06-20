//4-Find second smallest element in array
function secondSmallest(nums) {
  let smallest = nums[0];
  let secondSmallest = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < smallest) {
      secondSmallest = smallest;
      smallest = nums[i];
    } else if (nums[i] < secondSmallest && nums[i] !== smallest) {
      secondSmallest = nums[i];
    }
  }
  return secondSmallest;
}
let nums = [4, 2, 9, 1, 0, 6];
console.log(secondSmallest(nums));
//T = O(n),S = O(1);
