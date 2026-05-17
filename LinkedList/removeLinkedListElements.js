//203-Remove linked list elements
function removeElements(head, val) {
  let sentinal = new Listnode();
  sentinal.next = head;
  let prev = sentival;
  while (prev && prev.next) {
    if (prev.next.val == val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  sentinal.next;
}
