// let done = 5;
// let maths = 0;


// for (let i = 1; i <= done; i++){
//   maths++
// }

// let cereal = 10;
// while (cereal > 0) {
//   cereal--
// }


// Bubble sort in JavaScript

function genRandomArray(n) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr[i] = Math.round(10 * Math.random())
  }
  return arr;
}

function swap(array, index1, index2) {
  var x = array[index2];
  array[index2] = array[index1];
  array[index1] = x;
  return array;
}

function bubbleSort(array) {
  var n = array.length;
  for (var i = 0; i <= n - 2; i++){
    var count = 0;
    for (var j = 0; j <= n - 2; j++){
      if (array[j + 1] < array[j]) {
        swap(array, j, j + 1);
        count++
      }
    }
    if (count === 0) {
      break;
    }
  }
  return array
}

var array = genRandomArray(8)

console.log(bubbleSort(array));