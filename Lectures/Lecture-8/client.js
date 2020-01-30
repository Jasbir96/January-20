// whatsapp application
const socketioClient = require("socket.io-client");
// client=> server
const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const socket = socketioClient.connect("http://localhost:3000");
// console.log(socket.id);
// name
// question=> Join
// blocking=> web api
var user;

reader.question("What's ur Name", function(userName) {
  console.log(`Hi ${userName}`);
  const message = `${userName} has joined the chat`;
  user = userName;
  socket.emit("joining", message);
});
// message

reader.on("line", function(data) {
  const message = `${user} : ${data}`;
  socket.emit("message", message);
});

// any message come to user it prints
socket.on("notice", function(message) {
  console.log(message);
});
