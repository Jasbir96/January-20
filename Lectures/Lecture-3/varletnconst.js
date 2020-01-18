// console.log(x);
// var x;
// var x;
// if(true){
//   let x;
// }
// var y;
// console.log(y);
// arrays => objects;
const arr = [
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
// arr[95]="sdjfgsdjfhm";
// arr["96"]="sdmjhvfhjsdfdh";
// arr["some value"]="i am not valid index";
// arr["some index"]="i am kdjnfjhd valid index";

// console.log(arr.length);
// for(var key in arr){
// console.log(key +" : "+arr[key]);
// }

const cap = {
  firstName: "Steve",
  lastName: "Rogers",
  age: 5,
  friends: ["tony", "Bruce", "Peter"],
  sayHi: function() {
    console.log("Cap says Hi");
  },
  address: {
    city: "Manhatten",
    state: "New York"
  }
};
cap={firstName:"Jhon"};
delete cap.friends;
console.log(cap);

// for (var key in cap) {
//   console.log(key + " : " + cap[key]);
// }
