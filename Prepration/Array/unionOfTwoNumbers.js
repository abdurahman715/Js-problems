//1three-Union of two arrays
function findUnion(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!result.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!result.includes(arr2[i])) {
      result.push(arr2[i]);
    }
  }
  return result;
}
console.log(findUnion([1, 2, 3, 4], [3, 4, 5, 6]));
//T = O(n²), S = O(n)
