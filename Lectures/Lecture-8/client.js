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
// join
reader.question("What's ur Name", function(userName) {
  console.log(`Hi ${userName}`);
  user = userName;
  const data = `${userName} has joined the chat`;
  const message={};
  message.userName=userName;
  message.data=data;
  message.type="Joining"
  socket.emit("joining", message);
});
// message
reader.on("line", function(data) {
  // /msg Jhon jhvjhebfjhbd dfghgkj
const message={};
 if(data.startsWith("/msg")){
message.type="private";
const recievername=data.split(" ")[1];
message.recieverName=recievername;
message.data=data.split(" ").slice(2).join(" ");
 }else{
message.type="public";
message.data=data;
 }
  // types=> public ,private 
  // private , receiverName ,data 
  socket.emit("message", message);
});

// any message come to user it prints
socket.on("notice", function(message) {
  console.log(message);
});

