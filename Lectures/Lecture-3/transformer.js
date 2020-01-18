var arr = [1, 2, 3, 4, 5];
function doubeIt(x) {
  return 2 * x;
}
// pollyfill
function transformer(arr, cb) {
  var narr = [];
  for (var i = 0; i < arr.length; i++) {
    var ans = cb(arr[i]);
    narr.push(ans);
  }
  return narr;
}

var dArr = transformer(arr, doubeIt);

console.log(dArr);
console.log(arr);