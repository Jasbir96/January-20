// fn var
// var print=console.log;
// print("Hello All");
function greeter(variable) {
  console.log(typeof variable);
}
// greeter(1);
// greeter(true);
// greeter([12,3,4,5,]);
// greeter(null);

greeter(function() {
  console.log("I am a function passed in params");
  console.log("I ran some code ");
  return "value returned from fn";
});
