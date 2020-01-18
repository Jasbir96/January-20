// synchronous code
// now
console.log("Before code ");
// gap ,delay
// now => start,send to backgrround
// minimum time
setTimeout(function delayedGreeter() {
  console.log("I will run after 4 sec");
}, 4000);
// continue with after code
setTimeout(function myfn() {
  console.log("After code");
}, 8000);
// while(true){}

// database request ,http request,file read write=> background
