// require express=> to socket server
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);



//listen socket connection 
io.on('connection', function (socket) {
    console.log(socket.id)
    socket.on("color", function (color) {
        socket.broadcast.emit("oncolorChange", color);
    })

    socket.on("start",function(point){
socket.broadcast.emit("onstart",point);
    })
    socket.on("end",function(point){
socket.broadcast.emit("onend",point)
    })
});
// folder designated from which client can get files
app.use(express.static('public'));
// server start

server.listen(3000, function () {
    console.log("Server started at port 3000")
})