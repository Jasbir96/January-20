// whatsapp server
// require
const http = require("http");
const socketio = require("socket.io");
// http server is created
const server = http.createServer(function(req, res) {});

// storage
// name:id 
// => steve , jhon

// /msg to Jhon "gehkfgkhsfgfhdj"
// socket.io => socket enabled

const db={};
const socketServer = socketio(server);
socketServer.on("connection", function(socket) {
  socket.on("joining", function(message) {
    // save socket id here
    db[message.userName]=socket.id;
    socket.broadcast.emit("notice", message.data);
  });
  socket.on("message", function(message) {

    if(message.type=="private"){
      socketServer.to(`${db[message.recieverName]}`).emit('notice', message.data);
    }else{
      socket.broadcast.emit("notice", message.data);
    } 
  });
});

server.listen(3000, function() {
  console.log("Server is listening at port 3000");
});
