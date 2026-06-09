//150-Evaluate Reverse Polish Notation
function evalRPN(tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (
      tokens[i] === "+" ||
      tokens[i] === "-" ||
      tokens[i] === "*" ||
      tokens[i] === "/"
    ) {
      let a = stack.pop();
      let b = stack.pop();
      let res = eval(`${b} ${tokens[i]} ${a}`);
      stack.push(Math.trunc(res));
    } else {
      stack.push(tokens[i]);
    }
  }
  return Number(stack.pop());
}
