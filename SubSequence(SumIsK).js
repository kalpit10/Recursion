// Print the subesequence whose sum is equal to K
// For eg:- sum = 2, arr= [1, 2, 1] => Subsequence will be [1,1] & [2];

// T.C = O(2^n) as there are two options for every index (take or not take).
// S.C = O(n)

// FOR PRINTING ALL SUBSEQUENCES WHOSE SUM = K
function print(ind, ds, s, arr, sum, n) {
  if (ind === n) {
    if (s === sum) {
      console.log(ds.join(" "));
    }
    return;
  }

  ds.push(arr[ind]);
  s += arr[ind];
  print(ind + 1, ds, s, arr, sum, n);
  // Go back
  s -= arr[ind];
  ds.pop();

  print(ind + 1, ds, s, arr, sum, n);
}
const arr = [1, 2, 1];
const n = 3;
const ds = [];
const ind = 0;
const sum = 2;
print(ind, ds, 0, arr, sum, n);

// FOR PRINTING JUST ONE SUBSEQUENCE WHOSE SUM = K TO AVOID FUTURE RECURSION CALLS
function print(ind, ds, s, arr, sum, n) {
  if (ind === n) {
    if (s === sum) {
      console.log(ds.join(" "));
      return true;
    } else return false;
  }

  ds.push(arr[ind]);
  s += arr[ind];
  if (print(ind + 1, ds, s, arr, sum, n) === true) {
    return true;
  }
  s -= arr[ind];
  ds.pop();
  if (print(ind + 1, ds, s, arr, sum, n) === true) {
    return true; // Add return statement here
  }
  return false; // Return false if no subsequence is found
}

const arr = [1, 2, 1];
const n = 3;
const ds = [];
const ind = 0;
const sum = 2;
print(ind, ds, 0, arr, sum, n);

// FOR COUNTING HOW MANY SUBSEQUENCES ARE THERE IN TOTAL
function print(ind, s, arr, sum, n) {
  if (ind === n) {
    if (s === sum) return 1;
    else return 0;
  }

  s += arr[ind];
  let l = print(ind + 1, s, arr, sum, n);

  s -= arr[ind];

  let r = print(ind + 1, s, arr, sum, n);
  return l + r;
}

const arr = [1, 2, 1];
const n = 3;
const ind = 0;
const sum = 2;
console.log(print(ind, 0, arr, sum, n));
