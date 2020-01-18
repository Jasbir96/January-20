//Que what will be the order of invocation ??
function doA(fn) {
  console.log("Called doA");
  setTimeout(fn, 1000);
}
function doB() {
  console.log("Called doB");
}
function doC(fn) {
  console.log("Called doC");
  setTimeout(fn, 1000);
}
function doD() {
  console.log("Called doD");
}
function doE() {
  console.log("Called doE");
}
function doF() {
  console.log("Called doF");
}
doA(function() {
  doB();
  doC(function() {
    doD();
  });
  doE();
});
doF();
