let a = parseInt(prompt("Nhập số nguyên a:"));
let b = parseInt(prompt("Nhập số nguyên b:"));
if (isNaN(a) || isNaN(b)) {
  console.log("Vui lòng nhập số nguyên hợp lệ!");
} else {
  let arr = [];
  if (a <= b) {
    for (let i = a; i <= b; i++) {
      arr.push(i);
    }
  } else {
    for (let i = a; i >= b; i--) {
      arr.push(i);
    }
  }
  console.log("Mảng chứa các số trong khoảng giữa a và b là: " + arr);
}