socket.on("oncolorChange", function (color) {
    ctx.strokeStyle = color;
})

socket.on("onstart",function(point){
const {x,y,color,width}=point;
ctx.strokeStyle=color;
ctx.lineWidth=width;
ctx.beginPath();
ctx.moveTo(x, y);

})
socket.on("onend",function(point){
    
    const {x,y,color,width}=point;
    ctx.strokeStyle=color;
ctx.lineWidth=width;
    ctx.lineTo(x, y);
    ctx.stroke();
})