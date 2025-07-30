// Check if the srting is pelendromic...
let str = "racecar";
let bag = "";
for (let i = str.length - 1; i >= 0; i--) {
    bag += str[i]
}
bag === str ? console.log("string is palindromic") : console.log("Stirng is not palindromic")

// Remove duplicates from an array without inbuild functions...

function removeDuplicates(arr) {
  const seen = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (!seen[value]) {
      result.push(value);
      seen[value] = true;
    }
  }

  return result
}
let ans = removeDuplicates([1,2,3,4,2,3,1])
console.log(ans)



















