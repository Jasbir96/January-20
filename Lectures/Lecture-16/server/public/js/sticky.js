function createSticky() {

  const body = document.querySelector("body");
  // create
  const stickyPad = document.createElement("div");
  const NavBar = document.createElement("div");
  const minimize = document.createElement("div");
  const close = document.createElement("div");
  const writingPad = document.createElement("div");
  const textArea = document.createElement("textArea");
  
  // styling set
  minimize.setAttribute("class", "minimize");
  close.setAttribute("class", "close");
  stickyPad.setAttribute("class", "sticky");
  NavBar.setAttribute("class", "nav-bar");
  writingPad.setAttribute("class", "writingPad");
  textArea.setAttribute("class", "text-area");
  // added to html
  stickyPad.appendChild(NavBar);
  stickyPad.appendChild(writingPad);
  writingPad.appendChild(textArea);
  NavBar.appendChild(minimize);
  NavBar.appendChild(close);
  body.appendChild(stickyPad);

  // minimize


  let isMinimized = false;

  minimize.addEventListener("click", function() {
    if (isMinimized == false) {

      
      writingPad.style.display = "none";
    }else{
        writingPad.style.display="block";
    }
    isMinimized=!isMinimized;
  });
  
  close.addEventListener("click", function() {
    stickyPad.remove();
  });




  let isStickyDown = false;

  let initialX = null;
  let initialY = null;

  stickyPad.addEventListener("mousedown", function(e) {
    initialX = e.clientX;
    initialY = e.clientY;
    isStickyDown = true;
  });




  stickyPad.addEventListener("mousemove", function(e) {
    if (isStickyDown == false) return;

    let finalX = e.clientX;
    let finalY = e.clientY;
    let diffX = finalX - initialX;
    let diffY = finalY - initialY;
    
    let { top, left } = stickyPad.getBoundingClientRect();
    
    stickyPad.style.top = top + diffY + "px";

    stickyPad.style.left = left + diffX + "px";
    
    initialX = finalX;
    initialY = finalY;
  });


//   precaution
  stickyPad.addEventListener("mouseleave", function() {
    isStickyDown = false;
  });
  stickyPad.addEventListener("mouseup",function(){
      isStickyDown=false;
  })
}
