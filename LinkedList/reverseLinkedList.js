//206-Reverse Linked List
function Node(val) {
  this.val = val;
  this.next = null;
}
function reverseLinkedList(head) {
  let curr = head;
  let prev = null;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  head = prev;
  return prev;
}
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
let result = reverseLinkedList(head);
let arr = [];
let curr = result;
while (curr) {
  arr.push(curr.val);
  curr = curr.next;
}
console.log(arr.join(" -> "));
