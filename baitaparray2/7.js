let inputString = prompt("Nhập chuỗi:");
function getAllSubstrings(str) {
  let substrings = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      substrings.push(str.slice(i, j));
    }
  }
  return substrings;
}
let result = getAllSubstrings(inputString);
console.log(result);