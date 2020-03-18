// alert("I will log at client");
// socket is establised
const socket = io.connect('http://localhost:3000');



const input = document.getElementById("inputBox");

const button = document.getElementById("send");

const chatList = document.querySelector(".chat-list");
// sender 
button.addEventListener("click", function () {
    const data = input.value;
    if (data == "") {
        return;
    }
    const li = document.createElement("li");
    li.innerText = `You: ${data}`;

    li.style.listStyle = "none";

    chatList.appendChild(li);

    input.value = "";

    socket.emit("send", `sender:${data}`);
})

// reciever
socket.on("recievedMessage",function(message){

    const li = document.createElement("li");
    li.innerText = message;

    li.style.listStyle = "none";
    chatList.appendChild(li);
   
})