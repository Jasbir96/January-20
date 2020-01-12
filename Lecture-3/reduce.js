var arr = [1, 2, 3, 4, 5];

function multiply(total, y) {
  return total * y;
}
var product=arr.reduce(multiply);
console.log(product);