let arr = [1, 5, 2, 6, 3, 2, 1, 3, 5, 7];
let count = {};
for (let i = 0; i < arr.length; i++) {
  let element = arr[i];
  if (count[element] === undefined) {
    count[element] = 1;
  } else {
    count[element]++;
  }
}
console.log("Các phần tử xuất hiện từ hai lần trở lên:");
for (let key in count) {
  if (count[key] >= 2) {
    console.log(key);
  }
}