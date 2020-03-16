let isMouseDown = false;
let undoStack = [];
function getLocation(clientX, clientY) {
  const rect = board.getBoundingClientRect();
  const top = rect.top;
  return {
    y: clientY - top,
    x: clientX
  };
}
board.addEventListener("mousedown", function(e) {
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

  undoStack.push(point);
});
board.addEventListener("mousemove", function(e) {
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
  // lineTo
  undoStack.push(point);
});
board.addEventListener("mouseup", function(e) {
  // console.log("I was called");
  // ctx.closePath();
  isMouseDown = false;

  // ctx.closePath();
  // closepath
});

// beginPath,moveTo(x,y)
// lineTo(x1,y1) stroke














const undo = document.querySelector(".undo");
undo.addEventListener("click", function() {

  ctx.clearRect(0, 0, board.width, board.height);
  
  undoStack.pop();
  
  redraw();
});
// getLocation()

function redraw() {
  for (let i = 0; i < undoStack.length; i++) {
    let { x, y, type, color, width } = undoStack[i];
    ctx.strokrStyle = color;
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
