let arr = [1, 2, 5, 7];
let smallestMissing = 1;
arr.sort(function(a, b) {
  return a - b;
});
for (let i = 0; i < arr.length; i++) {
  if (arr[i] <= smallestMissing) {
    smallestMissing++;
  }
  else {
    break;
  }
}
console.log("Phần tử lớn hơn 0 nhỏ nhất chưa xuất hiện trong mảng là: " + smallestMissing);