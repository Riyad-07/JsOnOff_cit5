
let on = document.querySelector(".on");
let off = document.querySelector(".off");
let onLight= document.querySelector(".onlight");
let offLight= document.querySelector(".offlight");

on.addEventListener("click", function(){
    on.classList.toggle("on1")
    onLight.style.display = "flex"
    offLight.style.display = "none"
})

off.addEventListener("click", function(){
    off.classList.toggle("off1")
    onLight.style.display = "none"
    offLight.style.display = "flex"
})