//83-Remove duplicates from sorted list
function Node(val) {
  this.val = val;
  this.next = null;
}
function removeDuplicates(head) {
  let curr = head;
  while (curr && curr.next) {
    if (curr.val == curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
}
let head = new Node(1);
head.next = new Node(1);
head.next.next = new Node(2);
head.next.next.next = new Node(3);
head.next.next.next.next = new Node(3);
head.next.next.next.next.next = new Node(4);
let result = removeDuplicates(head);
let curr = result;
while (curr) {
  console.log(curr.val);
  curr = curr.next;
}
