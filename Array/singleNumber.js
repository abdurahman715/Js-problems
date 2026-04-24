//136-Single number
//Approach-1
// function singleNumber(nums) {
//   let hash = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (!hash[nums[i]]) {
//       hash[nums[i]] = 1;
//     } else {
//       hash[nums[i]]++;
//     }
//   }
//   for (let i = 0; i < nums.length; i++) {
//     if (hash[nums[i]] == 1) {
//       return nums[i];
//     }
//   }
// }

//Approach-2
function singleNumber2(nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
}
let nums = [1, 2, 3, 4, 5, 2, 3, 4, 5];
let result = singleNumber2(nums);
console.log(result);
