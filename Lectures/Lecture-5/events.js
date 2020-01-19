const events = require("events");
const eventMaker = new events();
// listeners
// server
eventMaker.on("submit", function(username, password) {
  if (username == "Jhon" && password == "1234") {
    console.log("You Are logged In");
  } else {
    console.log("UserName or password is wrong");
  }
});
eventMaker.on("submit", function(username, password) {
  if (username == "Jhon" && password == "1234") {
    console.log("Welcome Admin");
  } else {
    console.log("UserName or password is wrong");
  }
});



// client
eventMaker.emit("submit","Jhon","1234");
// eventMaker.emit("submit","Jhon","12345");
