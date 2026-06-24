//Find the sum of all even numbers greater than 10
function sumOfEven(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 10) {
      if (nums[i] % 2 == 0) {
        sum = sum + nums[i];
      }
    }
  }
  return sum;
}
let nums = [1, 7, 4, 12, 1, 5, 8, 15, 18];
console.log(sumOfEven(nums));
