function createSticky(){
   const body=document.querySelector("body");
    // create
   const stickyPad= document.createElement("div")
    const NavBar=document.createElement("div")
    const writingPad=document.createElement("div");
    const textArea=document.createElement("textArea");
// styling set
    stickyPad.setAttribute("class","sticky");
    NavBar.setAttribute("class","nav-bar");
    writingPad.setAttribute("class","writingPad");
    textArea.setAttribute("class","text-area");
// added to html
    stickyPad.appendChild(NavBar);
    stickyPad.appendChild(writingPad);
    writingPad.appendChild(textArea);

    body.appendChild(stickyPad);

}