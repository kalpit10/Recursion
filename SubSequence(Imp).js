// Subesequence means if the array is [3,1,2] so the subsequences will be total of 8
// [3], [3,1], [1,2], [1], [2], [3,1,2], [3,2], [null]
// Here we notice that all the pairs can be made in order only, that means i cannot make [2,1] or [3,2,1] as it does not fall in the order of original array [3,1,2]
// Refer striver lecture 6 of recursion for better understanding

function printF(ind, ds, arr, n) {
  if (ind === n) {
    if (ds.length === 0) {
      console.log("{}");
    } else {
      console.log(ds.join(" "));
    }
    return;
  }

  // take or pick the particular index into the subsequence
  ds.push(arr[ind]);
  printF(ind + 1, ds, arr, n);
  ds.pop();
  // not pick, or not take condition, this element is not added to your subesequence
  // move this line above the push statement to see {} as the output first
  printF(ind + 1, ds, arr, n);
}

const arr = [3, 1, 2];
const n = 3;
const ds = [];
printF(0, ds, arr, n);
