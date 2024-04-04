let arr = [1, 2, 1, 3, 4, 3, 5];
function findFirstUniqueElement(array) {
  let map = {};
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (map[element] === undefined) {
      map[element] = 1;
    } else {
      map[element]++;
    }
  }
  for (let j = 0; j < array.length; j++) {
    let element = array[j];
    if (map[element] === 1) {
      return element;
    }
  }
  return null;
}
let result = findFirstUniqueElement(arr);
console.log(result);