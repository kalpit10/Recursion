// n = 3 , output:-6 [1+2+3], n = 4, output:- 10 [1+2+3+4]

//First way [Paramterised]

function Sum(i, sum) {
  if (i < 1) {
    console.log(sum);
    return;
  }

  Sum(i - 1, sum + i);
}

Sum(4, 0);

// Functional

function add(n) {
  if (n === 0) return 0;

  return n + add(n - 1);
}
let i = add(3);
console.log(i);
