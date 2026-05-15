//234-Palindrome linked list
function isPalindrome(head) {
  //Finding the middle element
  let slow = (fast = head);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //Reverse the second half of list
  let prev = null;
  let curr = slow;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  //Checking palindrome
  let firstList = head;
  let secondList = prev;
  while (secondList) {
    if (firstList.val != secondList.val) {
      return false;
    }
    firstList = firstList.next;
    secondList = secondList.next;
  }
  return true;
}
