var arr = [
  1,
  1.1,
  "dvmjhdvj",
  true,
  undefined,
  [1, 2, 3, 4, 5, 6, 7],
  function sayHi() {
    return "i am fn inside an array";
  }
];

// console.log(arr.length);
// arr[arr.length]="last value";
// arr[90]="in between some value";
// console.log(arr[84]);

// // addLast => Push,removeLast=>Pop
// console.log(arr);
// console.log("`````````````````````````````````````````````");
// arr.push("some value");
// console.log(arr);
// var poppedValue=arr.pop();
// console.log(poppedValue);
// addFirst=> unshift,removeFirst=> shift

// slice
// var slicedArr=arr.slice(2,5);
// console.log(slicedArr);
// console.log("```````````````````````````````");
// console.log(arr);

// splice=> 
// console.log(arr);
// console.log("````````````````````");
// var splicedArr=arr.splice(4,3);
// console.log(splicedArr);
// console.log(arr);
// true/false
var ans=arr.includes(1.1);
// index/-1
var ans=arr.indexOf(undefined);

console.log(ans);