var print = console.log;
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

// console.log(cap.lastName);
// console.log(cap.firstName);
var variable = "friends";
// // key =>
// console.log(cap[variable]);
// create/update
cap.age = 45;
cap.movies=["winter soldier","Avengers"]
function updateObj(key){
  // cap[key]=value;
  delete cap[key];
  
}

updateObj("firstName");
console.log(cap);
