// function statement
function sayHi() {
  console.log("Hello All");
}
sayHi();

// function expression
var greeter = function fn1() {
  console.log("Greeting to all");
};
greeter();

// IIFEE=> immediately invoked function expression
(function init() {
  console.log("Board is initialized");
})()
