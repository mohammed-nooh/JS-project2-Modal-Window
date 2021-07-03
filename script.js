"use strict";


const clear=function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}


const modal=document.querySelector(".modal");

const overlay=document.querySelector(".overlay");

const closeModal=document.querySelector(".close-modal")

const showModal=document.querySelectorAll(".show-modal");

console.log(showModal)

for(let i=0;i<showModal.length;i++){
    showModal[i].addEventListener("click",function(){
        console.log("button clicked",showModal[i].textContent);
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");

    })
}

closeModal.addEventListener("click",clear);

overlay.addEventListener("click",clear)

// key press event

document.addEventListener("keydown",function(event){
    console.log(event,event.key);
})