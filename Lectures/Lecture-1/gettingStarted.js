// console.log("Hello All");
var print = console.log;
// int a=10;
// int b=a;
// types=> Primitive Types
// Number,String,boolean,undefined,null,symbol
// Dynamically typed language
var variable;
variable = 1;
variable = 1.1;
variable = "sdfdgfdvb";
// console.log(variable);
variable = true;
// variable = null;
// // for,while,if,switch
// for (var i = 1; i <= 10; i++) {
//   console.log("Number is " + i);
// }
// non Primitive => function ,arrays,objects

// function definition
function sayHi() {
  print("Hello All");
  // return 4;
}
// function call
print(sayHi());

// arrays=>
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
var cap = {
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
// print(arr[3]);
// print(arr[5][2]);
// print(arr[6]());
// objects=>key :value pair
// JSON=> Javascript Object Notation/XML
var cap = {
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

// XML=> <firstName>Steve</firstName>


print(cap.firstName);
print(cap.friends[1]);
print(cap.address.state);
print(cap.sayHi());


