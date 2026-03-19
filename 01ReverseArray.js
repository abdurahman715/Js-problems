//Reverse an array
//Approach - 1 Built-in method
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.reverse());

//Approach - 2
// let arr = [1, 2, 3, 4, 5];
// let newArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   newArr.push(arr[i]);
// }
// console.log(newArr);

//Approach-3
let arr = [1, 2, 3, 4, 5];
let left = 0;
let right = arr.length - 1;
while (left < right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
  left++;
  right--;
}
console.log(arr);
