//1-Find largest element in an array
function largestElement(nums) {
  let largest = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }
  return largest;
}
let nums = [4, 2, 9, 1, 0, 6];
let largestNumber = largestElement(nums);
console.log(largestNumber);
//T = O(n) S = O(1)
