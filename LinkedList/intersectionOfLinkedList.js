//160-Intersection of two linked lists
function Node(val) {
  this.val = val;
  this.next = null;
}
function intersectionValue(headA, headB) {
  let store = new Set();
  while (headB) {
    store.add(headB);
    headB = headB.next;
  }
  while (headA) {
    if (store.has(headA)) {
      return headA;
    }
    headA = headA.next;
  }
  return null;
}
let common = new Node(8);
common.next = new Node(10);
let headA = new Node(3);
headA.next = new Node(7);
headA.next.next = common;
let headB = new Node(99);
headB.next = new Node(1);
headB.next.next = common;
let result = intersectionValue(headA, headB);
console.log(result);
