let arr = [5, 10, 15, 20, 25];
let userInput = prompt("Nhập giá trị cần tìm kiếm:");
let found = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == userInput) {
    console.log("Vị trí của phần tử trong mảng là: " + i);
    found = true;
    break;
  }
}
if (!found) {
  console.log("Phần tử không tồn tại");
}