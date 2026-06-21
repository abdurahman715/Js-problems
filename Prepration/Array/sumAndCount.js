//Find the sum of all even numbers and count all odd numbers
function sumAndCount(nums) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      sum += nums[i];
    } else {
      count++;
    }
  }
  console.log("Sum of even numbers:", sum);
  console.log("Count of odd numbers:", count);
}
let nums = [1, 2, 4, 5, 6, 7];
sumAndCount(nums);
