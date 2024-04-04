let arr = [2, 4, 6, 4, 8, 4, 10, 4, 12];
let userInput = parseInt(prompt("Nhập một số nguyên:"));
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === userInput) {
    count++;
  }
}
console.log("Số lần xuất hiện của " + userInput + " trong mảng là: " + count);