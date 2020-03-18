let isMouseDown = false;
let undoStack = [];
let redoStack=[];

function getLocation(clientX, clientY) {
  const rect = board.getBoundingClientRect();
  const top = rect.top;
  return {
    y: clientY - top,
    x: clientX
  };
}
// mouse click
board.addEventListener("mousedown", function (e) {
  ctx.beginPath();
  const { x, y } = getLocation(e.clientX, e.clientY);
  isMouseDown = true;
  let point = {
    x: x,
    y: y,
    type: "start",
    color: ctx.strokeStyle,
    width: ctx.lineWidth
  };
  ctx.moveTo(x, y);
  socket.emit("start",point);
  undoStack.push(point);
});
board.addEventListener("mousemove", function (e) {
  // console.log(e);
  if (!isMouseDown) return;
  const { x, y } = getLocation(e.clientX, e.clientY);
  ctx.lineTo(x, y);
  ctx.stroke();

  let point = {
    x: x,
    y: y,
    color: ctx.strokeStyle,
    width: ctx.lineWidth,
    type: "end"
  };
  socket.emit("end",point);
  // lineTo
  undoStack.push(point);
});
board.addEventListener("mouseup", function (e) {
  // console.log("I was called");
  // ctx.closePath();
  isMouseDown = false;

  // ctx.closePath();
  // closepath
});

// beginPath,moveTo(x,y)
// lineTo(x1,y1) stroke
const undo = document.querySelector(".undo");
const redo=document.querySelector(".redo");
let interval = null;

redo.addEventListener("mousedown",function(){
  interval = setInterval(function () {
    if(redoStack.length>0){
    undoStack.push( redoStack.pop());
      redraw();

    }

  }, 50);
})
redo.addEventListener("mouseup",function(){
  clearInterval(interval);
})

undo.addEventListener("mousedown", function () {

  interval = setInterval(function () {

    
    if(undoStack.length>0){
    redoStack.push( undoStack.pop());
      redraw();

    }

  }, 50);
});

undo.addEventListener("mouseup",function(){
  clearInterval(interval);
})

// getLocation()

function redraw() {
  ctx.clearRect(0, 0, board.width, board.height);

  for (let i = 0; i < undoStack.length; i++) {
    let { x, y, type, color, width } = undoStack[i];

    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    if (type == "start") {
      ctx.beginPath();
      ctx.moveTo(x, y);
    } else if (type == "end") {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  }
}
