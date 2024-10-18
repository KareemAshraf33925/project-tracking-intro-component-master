var iconhamburger=document.querySelector(".icon-hamburger");
var items=document.querySelector(".items");
var iconclose=document.querySelector(".icon-close");
iconhamburger.addEventListener("click",()=>{
    items.style.opacity="1";
    iconhamburger.style.display="none";
    iconclose.style.display="block";
})
iconclose.addEventListener("click",()=>{
    items.style.opacity="0";
    iconhamburger.style.display="block";
    iconclose.style.display="none";
})