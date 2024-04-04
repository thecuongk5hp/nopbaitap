function findLongestDistinctSubarray(arr) {
    let distinctArray = [];
    let currentArray = [];
    for (let i = 0; i < arr.length; i++) {
      const index = currentArray.indexOf(arr[i]);
      if (index !== -1) {
        currentArray = currentArray.slice(index + 1);
      }
      currentArray.push(arr[i]);
      if (currentArray.length > distinctArray.length) {
        distinctArray = currentArray.slice();
      }
    }
    return distinctArray;
  }
  let array = [1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 5];
  let longestDistinctSubarray = findLongestDistinctSubarray(array);
  console.log(longestDistinctSubarray);