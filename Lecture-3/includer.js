var arr = [5, 8, 14, 17, 23, 6, 8];
// 
function isOdd(x) {
  return x % 2 == 1;
}

function includer(arr, cb) {
  var farr = [];
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i]) == true) {
      farr.push(arr[i]);
    }
  }
  return farr;
}

var farr=includer(arr,isOdd);
console.log(farr);
console.log(arr);
