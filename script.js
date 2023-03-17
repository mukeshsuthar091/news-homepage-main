const menu = document.querySelector(".menu");
const close = document.querySelector(".close img");
const bar = document.querySelector(".menu-bar");

if(bar){
    bar.addEventListener("click", ()=>{
        menu.classList.add("active");
    })
}

if(close){
    close.addEventListener("click", ()=>{
        menu.classList.remove("active");
    })
}

