let isMouseDown = false;
function getLocation(clientX, clientY) {
    const rect = board.getBoundingClientRect();
    const top = rect.top;
    return {
        y:  clientY-top,
        x: clientX
    }
}
board.addEventListener("mousedown", function (e) {
    ctx.beginPath();
    const { x, y } = getLocation(e.clientX, e.clientY);
    isMouseDown = true;
    ctx.moveTo(x, y);
})
board.addEventListener("mousemove", function (e) {
    // console.log(e);
    if (!isMouseDown)
        return;
    const { x, y } = getLocation(e.clientX, e.clientY);
    ctx.lineTo(x, y);
    ctx.stroke();
    // lineTo
})
board.addEventListener("mouseup", function (e) {
    // console.log("I was called");
    ctx.closePath();
    isMouseDown = false;

    // ctx.closePath();
    // closepath
})

// getLocation()