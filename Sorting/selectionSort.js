function selectionSort(nums) {
  let n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }
    if (min != i) {
      let temp = nums[i];
      nums[i] = nums[min];
      nums[min] = temp;
    }
  }
  return nums;
}
let nums = [90, 23, 56, 1, 45, 39, 60];
let sorted = selectionSort(nums);
console.log(sorted);
