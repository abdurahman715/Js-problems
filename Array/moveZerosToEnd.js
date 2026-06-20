//28three-Move zeros to the end of the array.
function moveZeros(nums) {
  let x = 0;
  let i;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }
  //Fill rest of the elements with zeros
  for (let i = x; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
}
let nums = [0, 1, 3, 0];
let result = moveZeros(nums);
console.log(result);
