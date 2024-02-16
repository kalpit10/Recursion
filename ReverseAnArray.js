// Reverse a given array
// for eg:- n = [1,2,3,4] => [4,3,2,1]

// Mutliple variables
function reverse(arr, start, end) {
  if (start >= end) return;

  //swap
  [arr[start], arr[end]] = [arr[end], arr[start]];

  reverse(arr, start + 1, end - 1);
}

let arr = [1, 2, 3, 4, 5];
reverse(arr, 0, arr.length - 1);
console.log(arr);

// Single variable
function reverseArr(arr, start) {
  if (start >= Math.floor(arr.length / 2)) return;

  [arr[start], arr[arr.length - start - 1]] = [
    arr[arr.length - start - 1],
    arr[start],
  ];

  reverseArr(arr, start + 1);
}
let array = [1, 2, 3, 4, 5];

reverseArr(array, 0);
console.log(array);
