//28-Find the index of the first occurrence of  the string
function strStr(haystack, needle) {
  let n = haystack.length;
  let m = needle.length;
  for (let i = 0; i <= n - m; i++) {
    //Check if needle is equal to window
    let j = 0;
    for (j = 0; j < m; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }
    if (j === m) {
      return i;
    }
  }
  return -1;
}
