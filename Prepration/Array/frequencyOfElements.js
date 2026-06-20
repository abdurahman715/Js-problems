//10-Find the frequency of each element
function frequencyOfElements(nums) {
  let frequency = {};
  for (let i = 0; i < nums.length; i++) {
    if (frequency[nums[i]]) {
      frequency[nums[i]]++;
    } else {
      frequency[nums[i]] = 1;
    }
  }
  return frequency;
}
let nums = [1, 2, 1, 4, 5, 6, 4, 4, 5, 5, 5];
console.log(frequencyOfElements(nums));
