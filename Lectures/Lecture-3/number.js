// Input : 3,4,sum
// Output : 7
// number(3,4,sum); 7
// number(3,4,mult); 12
// number(3,4,diff);-1
function sum(x, y) {
  return x + y;
}
function diff(x, y) {
  return x - y;
}
function mult(x, y) {
  return x * y;
}
function number(x, y, fn) {
  var ans = fn(x, y);
  console.log(ans);
}
number(3, 4, sum);
number(3, 4, mult);
number(3, 4, diff);
