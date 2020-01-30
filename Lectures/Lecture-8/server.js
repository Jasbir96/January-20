// whatsapp server
// require
const http = require("http");
const socketio = require("socket.io");
// http server is created
const server = http.createServer(function(req, res) {});

// socket.io => socket enabled
const socketServer = socketio(server);

socketServer.on("connection", function(socket) {
  socket.on("joining", function(message) {
    socket.broadcast.emit("notice", message);
  });
  socket.on("message", function(message) {
    socket.broadcast.emit("notice", message);
  });
});

server.listen(3000, function() {
  console.log("Server is listening at port 3000");
});
