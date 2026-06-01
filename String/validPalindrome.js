//125-Valid Palindrome
//Approach-1
function validPalindrome(s) {
  s = s.toLowerCase();
  let filteredString = "";
  let rev = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/i)) {
      filteredString = filteredString + s[i];
      rev = s[i] + rev;
    }
  }
  return filteredString === rev;
}

//Approach-2
function validPalindrome(s) {
  s = s.toLowerCase();
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (!s[i].match(/[a-z0-9]/i)) {
      i++;
    } else if (!s[j].match(/[a-z0-9]/i)) {
      j--;
    } else if (s[i] == s[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
}

let str = "cjc";
let result = validPalindrome(str);
console.log(result);
