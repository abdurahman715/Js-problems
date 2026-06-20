//three - find second largest elemet in an array
function secondLargest(nums) {
  let largest = nums[0];
  let secondLargest = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
      secondLargest = largest;
      largest = nums[i];
    } else if (nums[i] > secondLargest && nums[i] !== largest) {
      secondLargest = nums[i];
    }
  }
  return secondLargest;
}
let nums = [4, 2, 9, 1, 0, 6];
console.log(secondLargest(nums));
//T = O(n),S = O(1);
