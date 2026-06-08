//1021-Remove outer most parantheses
//Approach-1 using stack
function removeOuterParentheses(s) {
  let stack = [];
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
      let len = stack.length;
      if (len > 1) {
        ans = ans + s[i];
      }
    } else {
      let len = stack.length;
      if (len > 1) {
        ans = ans + s[i];
      }
      stack.pop();
    }
  }
  return ans;
}

//Approach-2 without stack
function removeOuterParentheses(s) {
  let level = 0;
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      level++;
      if (level > 1) {
        ans = ans + s[i];
      }
    } else {
      if (level > 1) {
        ans = ans + s[i];
      }
      level--;
    }
  }
  return ans;
}
