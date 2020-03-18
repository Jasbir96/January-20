// require express=> to socket server
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);



//listen socket connection 
io.on('connection', function (socket) {
    console.log(socket.id);
    socket.on("send", function (message) {
        socket.broadcast.emit("recievedMessage", message);
    })
});



// folder designated from which client can get files
app.use(express.static('client'));
// server start

server.listen(3000, function () {
    console.log("Server started at port 3000")
})