var first = [1, 2, 3, 4, 5];
var narr = [];
var length=first.length;
for (var i = 0; i < length; i++) {
  console.log(i +" "+first.length);
  narr.push(first.pop());
}
console.log(narr);
