//27-Remove Element
function removeElement(nums, val) {
  let x = 0;
  let i;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[x] = nums[i];
      x++;
    }
  }
  return x;
}
let nums = [3, 2, 2, 3];
let result = removeElement(nums, 3);
console.log(result);
