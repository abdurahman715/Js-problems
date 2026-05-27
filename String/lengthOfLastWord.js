//58-Length of last word
//Approach-1 Builtin methods
function lengthOfLastWord(s) {
  s = s.trim();
  s = s.split(" ");
  return s[s.length - 1].length;
}
let s = "  hello Abdurahman";
let result = lengthOfLastWord(s);
console.log(result);

//Approach-2
function lengthOfLastWord(s) {
  let n = s.length - 1;
  while (n >= 0) {
    if (s[n] === " ") {
      --n;
    } else {
      break;
    }
  }
  let count = 0;
  while (n >= 0) {
    if (s[n] != " ") {
      --n;
      ++count;
    } else {
      break;
    }
  }
  return count;
}

//Approach-3
function lengthOfLastWord(s) {
  let n = s.length - 1;
  let count = 0;
  while (n >= 0) {
    if (s[n] != " ") {
      count++;
    } else if (count > 0) {
      break;
    }
    n--;
  }
  return count;
}
