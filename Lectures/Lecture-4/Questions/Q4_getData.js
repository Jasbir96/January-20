//Que Give the output of following code ??
function getData(num, cb) {
  setTimeout(function() {
    cb(num);
  }, 1000);
}
getData(10, function(num1) {
  var x = 1 + num1;
  console.log(x);
  getData(30, function(num2) {
    var y = 1 + num2;
    console.log(y);
    getData(x + y, function(answer) {
      console.log(answer);
    });
  });
});
