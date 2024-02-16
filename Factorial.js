// Take out factorial upto N

// For eg:- n = 3 [3 * 2 * 1] = 6, n = 4 [4 * 3 * 2* 1] = 24
// T.C = O(n), S.C = O(n)

// Parameterised
function paraFac(i, sum) {
  if (i < 1) return sum;

  return paraFac(i - 1, sum * i);
}
let j = paraFac(5, 1);
console.log(j);

//Functional
function factorial(n) {
  if (n === 0) return 1;

  return n * factorial(n - 1);
}

let i = factorial(3);
console.log(i);
