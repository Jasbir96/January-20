var x = 10;
function myfun() {
  // var x = 20;/
  x += 1;
  console.log("line5 " + x);
  if (true) {
    // var x = 30;//
    console.log("line8 " + x);
  }
  console.log(x);
}
myfun();
console.log("line13 " + x);

