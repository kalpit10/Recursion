// String on reverse reads the same
// For eg:- "Naman" -> "Naman"
// Output should return true or false.

//T.C = O(n/2) , S.C = O(n/2)  as we are checking the half list only
function reverseStr(str, start) {
  if (start > Math.floor(str.length / 2)) return true;

  if (str[start] !== str[str.length - start - 1]) return false;

  return reverseStr(str, start + 1);
}

let str = "12121";
console.log(reverseStr(str, 0));
