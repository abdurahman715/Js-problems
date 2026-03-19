//Largest element in an array
//Approach-1
// let arr = [1, 2, 3, 4, 5];
// let largest = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     largest = arr[i];
//   }
// }
// console.log(largest);

//Approach - 2
let arr = [1, 2, 3, 4, 5];
console.log(Math.max(...arr));
