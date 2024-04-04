// 1.Tham trị (Primitive values):

// Các giá trị nguyên thủy như số, chuỗi, boolean được coi là tham trị.
// Khi một biến được gán giá trị tham trị, giá trị của biến sẽ được sao chép vào một vùng nhớ khác trong bộ nhớ.
// Khi bạn thay đổi giá trị của biến mới, giá trị của biến cũ không bị ảnh hưởng và không thay đổi.

// 2.Tham chiếu (Reference values):

// Các đối tượng (object) trong JavaScript, bao gồm cả mảng, được coi là tham chiếu.
// Khi một biến được gán giá trị tham chiếu, thực tế là biến đó chỉ lưu trữ một "tham chiếu" đến vùng nhớ chứa đối tượng.
// Khi bạn thay đổi đối tượng thông qua biến mới, cả biến mới và biến cũ sẽ trỏ đến cùng một vùng nhớ, vì vậy thay đổi sẽ được phản ánh trong cả hai biến.

let numbers = [1, 2, 3, 4, 5];
let newArr = numbers;
newArr.push(8);
console.log(newArr);
console.log(numbers);