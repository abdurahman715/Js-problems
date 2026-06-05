//155-Min Stack
function MinStack() {
  this.stack = [];
}
MinStack.prototype.push = function (val) {
  if (this.stack.length === 0) {
    this.stack.push([val, val]);
  } else {
    let minVal = Math.min(val, this.stack[this.stack.length - 1][1]);
    this.stack.push([val, minVal]);
  }
};
MinStack.prototype.pop = function () {
  this.stack.pop();
};
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1][0];
};
MinStack.prototype.getMin = function () {
  return this.stack[this.stack.length - 1][1];
};
