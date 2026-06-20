//7-Count Even and Odd numbers
function countEvenAndOddNumber(nums) {
  let odd = 0;
  let even = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  console.log("ODD:", odd);
  console.log("EVEN:", even);
}
let nums = [1, 2, 6, 4, 8, 9];
countEvenAndOddNumber(nums);
