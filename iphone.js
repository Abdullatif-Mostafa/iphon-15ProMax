let container=document.querySelector(".container");
let imgcontent=document.querySelector(".imgcontent");
let img =document.querySelector(".img");
let images=document.querySelector(".images");
let bodyy=document.querySelector(".bodyy");
let navbar=document.querySelector(".navbar")
console.log(navbar)

function changeImg(value)
{
    img.src=value;
}
function changeBackground(colors)
{
    bodyy.style.background=colors;
    // navbar.style.background=colors;
}
const handelClicked=()=>{
    console.log(" anything ")
}