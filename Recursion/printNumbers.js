function numbers(n) {
  if (n < 1) {
    return;
  }
  console.log(n);
  numbers(--n);
}
numbers(10);
