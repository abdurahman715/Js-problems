//141-Linked list cycle
//Approach-1
function Node(val) {
  this.val = val;
  this.next = null;
}
// function hasCycle(head) {
//   let seenNodes = new Set();
//   let curr = head;
//   while (curr) {
//     if (seenNodes.has(curr)) {
//       return true;
//     }
//     seenNodes.add(curr);
//     curr = curr.next;
//   }
//   return false;
// }
// let head = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);
// let node4 = new Node(4);
// head.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node2;
// let result = hasCycle(head);
// console.log(result);

//Approach-2 floyd's algorithm
function hasCycle(head) {
  if (!head) {
    return false;
  }
  let slow = head;
  let fast = head.next;
  while (slow != fast) {
    if (fast == null || fast.next == null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
}
let head = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;
let result = hasCycle(head);
console.log(result);
