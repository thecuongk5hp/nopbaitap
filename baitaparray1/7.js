let arr = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7];
let targetSum = parseInt(prompt("Nhập số bất kỳ:"));
let subArray = [];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  subArray.push(arr[i]);
  sum += arr[i];
  if (sum === targetSum) {
    break;
  }
  while (sum > targetSum) {
    sum -= subArray[0];
    subArray.shift();
    if (sum === targetSum) {
      break;
    }
  }
}
if (subArray.length > 0) {
  console.log("Mảng con thỏa mãn có tổng bằng " + targetSum + ":");
  console.log(subArray);
} else {
  console.log("Không có mảng con thỏa mãn.");
}