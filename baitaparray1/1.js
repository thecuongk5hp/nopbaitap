let arr = [1, 2, "abc", 3, "xyz", 5, 6];
let hasInteger = false;
for (var i = 0; i < arr.length; i++) {
  if (Number.isInteger(arr[i])) {
    console.log(arr[i]);
    hasInteger = true;
  }
}
if (!hasInteger) {
  console.log("Trong mảng không tồn tại số nguyên");
}