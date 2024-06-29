function shorterReverseLonger(a, b) {
  return a.length >= b.length
    ? b + a.split("").reverse().join("") + b
    : a + b.split("").reverse().join("") + a;
}
console.log(shorterReverseLonger("first", "abcde"));
