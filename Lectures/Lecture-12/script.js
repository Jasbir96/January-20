// select any element
// gives first element with that particular id
// document.getElementById
const body = document.querySelector("body");
// change styling of any element=> in camel casing
// background-color
body.style.backgroundColor = "black";
body.style.color = "white";

// create element
const h1 = document.createElement("h1");
h1.textContent = "text generated through JS";
body.appendChild(h1);

const p = document.createElement("p");
p.textContent = "Shopping cart";

const ul = document.createElement
    ("ul");

const orders = ["Pen", "Pencil", "Eraser"];
for (let i = 0; i < orders.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `<p>${orders[i]} is available</p>
    <button>x</button>`;
    ul.appendChild(li);
}
body.appendChild(ul);
// body.insertBefore(p, ul);
ul.setAttribute("id", "listItems")


const img = document.createElement("img");
// // attribute => classes ,id,src,href
// // setAttribute
// // getAttribute
// // removeattribute
img.setAttribute("src", "image.jpg");
body.appendChild(img);

// setInterval(function(){
//     img.setAttribute("class","imgRound");
// },2000);
// // setInterval(function(){
// //     img.removeAttribute("class","imgRound");
// // },2500);
// // to get all the elements
// // gives array of all li elements

// // it also works on classes and Ids
// // const liArray = document.querySelectorAll("li");
// // gives all the elements with class of imground
// // const imgroundArray = document.querySelectorAll(".imground");
// // gives all the elements with id of listItems
// // 
// // const listItemsArray = document.querySelectorAll("#listItems");
// // document.getElementsByTagName()
// // document.getElementsByClassName()

const liArray = document.getElementsByTagName("li");

const l1 = liArray[0];
const l2 = liArray[1];
const l3 = liArray[2];
l1.addEventListener("click", function () {

    l1.style.backgroundColor = "yellow";
})

l2.addEventListener("click",function(){
    l2.innerHTML="<p>text changed by mouseout</p>";
})
l3.addEventListener("click",function(){
    l3.remove();
})
