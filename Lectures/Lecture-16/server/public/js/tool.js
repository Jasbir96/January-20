// socket is established
const socket = io.connect("http://localhost:3000");
console.log("Inside tool");
let isActive = "pencil";
let pencilOptions = document.querySelector(".pencil-options")
let eraserOptions = document.querySelector(".eraser-options");
function handleClick(tool) {
    if (tool == "pencil") {
        if (isActive == "pencil") {
            pencilOptions.classList.add("show")
        } else {
            isActive = "pencil";

            ctx.strokeStyle = "black";
            eraserOptions.classList.remove("show")

        }
    } else if (tool == "eraser") {
        if (isActive == "eraser") {

            eraserOptions.classList.add("show")
        } else {
            isActive = "eraser";
            pencilOptions.classList.remove("show")

            ctx.strokeStyle = "white";
        }

    } else if (tool == "sticky") {
        createSticky();
    }
}


function handleColorChange(color) {

    ctx.strokeStyle = color;
    socket.emit("color", color);
}




let inputArr = document.getElementsByTagName("input");
inputArr[0].addEventListener("change", function (e) {
    ctx.lineWidth = inputArr[0].value
})