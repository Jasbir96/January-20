var arr = [5, 8, 14, 17, 23, 6, 8];
// true/false
function isOdd(x) {
  return x % 2 == 1;
}
var farr = arr.filter(isOdd);
console.log(farr);
console.log(arr);
