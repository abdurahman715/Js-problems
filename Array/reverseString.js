//344-Reverse String
function reverseString(str) {
  let length = str.length;
  let halfLen = Math.floor(length / 2);
  let i;
  for (i = 0; i < halfLen; i++) {
    let temp = str[i];
    str[i] = str[length - i - 1];
    str[length - i - 1] = temp;
  }
  return str;
}
let str = ["H", "e", "l", "l", "o"];
let reversed = reverseString(str);
console.log(reversed);
