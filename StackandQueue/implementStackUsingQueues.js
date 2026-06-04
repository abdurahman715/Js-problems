//225-Implement Stack using queues
function MyStack() {
  let q1 = [];
  let q2 = [];
}
MyStack.prototype.push = function (x) {
  this.q1.push(x);
};
MyStack.prototype.pop = function () {
  let n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    this.q2.push(this.q1.shift());
  }
  let ans = this.q1.shift();
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;
  return ans;
};
MyStack.prototype.top = function () {
  let n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    this.q2.push(this.q1.shift());
  }
  let top = this.q1[0];
  this.q2.push(this.q1.shift());
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;
  return top;
};
MyStack.prototype.empty = function () {
  let n = this.q1.length;
  if (n === 0) {
    return true;
  } else {
    return false;
  }
};
