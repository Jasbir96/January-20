function saySomething(variable) {
  console.log("Did you just Said " + variable());
}
// saySomething(1);
// saySomething("jmdhvadjfsv");
// saySomething(true);
// saySomething(null);
// saySomething(undefined);
// saySomething([1, 2, 3, 4]);
saySomething(function() {
  console.log("I am fn passed as a param");
  console.log("I have executed some code");
  return "Hello from fn";
});
