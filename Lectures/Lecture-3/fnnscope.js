function a() {
   myVar = 2;
  console.log("Line Number 7 " + myVar);
  function b() {
    console.log("Line Number 6  " + myVar);
  }
  b();
}
 myVar = 1;
console.log("Line Number 11 " + myVar);
a();
myVar = 5;
console.log("Line Number 13 " + myVar);
