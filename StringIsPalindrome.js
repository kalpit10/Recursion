// String on reverse reads the same
// For eg:- "Naman" -> "Naman"
// Output should return true or false.

function reverseStr(str, start) {
  if (start > Math.floor(str.length / 2)) return true;

  if (str[start] !== str[str.length - start - 1]) return false;

  return reverseStr(str, start + 1);
}

let str = "121!1";
console.log(reverseStr(str, 0));
