var print = console.log;
function getLastName(fullName) {
  return fullName.split("")[1];
}

function getFirstName(fullName) {
  return fullName.split(" ")[0];
}
// higher order => small , data
function greeter(fullName, cb) {
  var greet = cb(fullName);
  console.log("Hello " + greet);
}
greeter("Steve Rogers", getFirstName);
greeter("Steve Rogers", getLastName);

// print(getLastName("Steve Rogers"));
// print(getFirstName("Steve Rogers"));
