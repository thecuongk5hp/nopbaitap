let arr = [1, 2, 1, 3, 4, "f"];
function getDistinctElements(array) {
  let distinctArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!distinctArray.includes(array[i])) {
      distinctArray.push(array[i]);
    }
  }
  return distinctArray;
}
let result = getDistinctElements(arr);
console.log(result);