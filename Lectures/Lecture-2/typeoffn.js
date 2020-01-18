// function statement
// function sayHi() {
//   console.log("Hello All");
// }
// sayHi();

// // function expression
// var greeter = function fn1() {
//   console.log("Greeting to all");
// };
// greeter();

// IIFEE=> immediately invoked function expression

var $ = (function init() {
  var object = {
    getMyName: function(name) {
      console.log("Hello " + name);
    },
    fnCount: 1
  };
  console.log("Board is initialized");
  return object;
})();
$.getMyName("Steve");
console.log($.fnCount);
