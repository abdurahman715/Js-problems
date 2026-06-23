//Find Largest even number in an array
function largestEvenNumber(nums) {
  let largest = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      if (nums[i] > largest) {
        largest = nums[i];
      }
    }
  }
  return largest;
}
let nums = [, 17, 9, 7, 5, 9, 9];
console.log(largestEvenNumber(nums));
