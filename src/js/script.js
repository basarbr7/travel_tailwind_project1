let  buttonCollops = document.querySelector(".btn_collops")
let ul = document.querySelector("ul")

buttonCollops.addEventListener("click", ()=>{
    ul.classList.toggle("res_menu")
})





const plane = document.querySelector(".plane");

plane.addEventListener("click", () => {
    plane.classList.toggle("animate");
});


plane.addEventListener("mouseover", () => {
    plane.classList.add("paused");
});

plane.addEventListener("mouseleave", () => {
    plane.classList.remove("paused"); 
});