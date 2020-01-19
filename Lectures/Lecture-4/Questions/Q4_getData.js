//Que Give the output of following code ??
function getData(num, cb) {
  setTimeout(function() {
    cb(num);
  }, 1000);
}
var x;

getData(10, fn1);

function fn1(num1) {
  x = 1 + num1;
  console.log(x);
  getData(30, fn2);
}
function fn2(num2) {
  var y = 1 + num2;
  console.log(y);
  getData(x + y,fn3);
}
function fn3(answer) {
  console.log(answer);
}
