// 0 1 1 2 3 5 8 13 21 34.........
// Give the nth fibonacci number, For eg:- f(3) => 3, f(4) => 3 etc.

// T.C => O(2^n), S.C => O(n)
// function fibonacci(n) {
//   if (n <= 1) return n;

//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// let fi = fibonacci(3);
// console.log(fi);

// T.C => o(2^n) ,  S.C = O(2^n)

// To print till the number specified.
function fibonacciSequence(n) {
  const sequence = [];

  for (let i = 0; i <= n; i++) {
    sequence.push(fibonacci(i));
  }

  return sequence;
}

function fibonacci(n) {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

const fibSequence = fibonacciSequence(5);
console.log(fibSequence); // Output: [0, 1, 1, 2, 3, 5]
