var arr = [1, 2, 3, 4, 5];
function multiply(total, y) {
  return total * y;
}
function adder(total, y) {
  return total + y;
}

function composer(arr, cb) {
  var total = arr[0];
  for (var i = 1; i < arr.length; i++) {
    total = cb(total, arr[i]);
  }
  return total;
}
var product = composer(arr, multiply);
var sum = composer(arr, adder);
console.log(sum);
