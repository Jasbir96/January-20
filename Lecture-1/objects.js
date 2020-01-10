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


for(var key in cap){
  console.log(key+" : "+cap[key]);
  
}
console.log("``````````````````");
for(var key in cap){
  console.log(key +" : "+cap.key );
}
// get =>
// .operator
// []
// print(cap.lastName);
// print(cap["lastName"]);
//undefined
// print(cap.lastname);
// update,create=>
// cap.age = 45;
// cap.movies = ["civil War", "Winter Soldier", "Avengers"];
// // delete
// delete cap.lastName;
// print(cap);

// function updateCap(key, value) {
// cap[key]=value;
// console.log(cap);
// console.log("`````````````````````````````");
// }
// updateCap("lastName", "Setevnson");
// updateCap("firstName", "Jhon");
