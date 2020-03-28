const nav = document.querySelector("nav");
const features = document.querySelector(".features");

window.addEventListener("scroll", function() {
  let pos = features.getBoundingClientRect().top;
  if (pos < 0) {
    nav.setAttribute("class", "sticky");
  }else{
    nav.removeAttribute("class","sticky");
  }
});
