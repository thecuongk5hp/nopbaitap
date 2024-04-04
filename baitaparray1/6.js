let arr = [-1, 5, -2, 6, 3];
let rearrangedArray = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    rearrangedArray.unshift(arr[i]);
  } else {
    rearrangedArray.push(arr[i]);
  }
}
console.log("Mảng sau khi di chuyển các phần tử âm lên đầu và phần tử dương về cuối:");
console.log(rearrangedArray);