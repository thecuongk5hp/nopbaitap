let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenArr = [];
let oddArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evenArr.push(arr[i]);
  } else {
    oddArr.push(arr[i]);
  }
}
console.log("Mảng chứa các số chẵn là: " + evenArr);
console.log("Mảng chứa các số lẻ là: " + oddArr);