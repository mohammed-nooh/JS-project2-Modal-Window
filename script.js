"use strict";


const modal=document.querySelector(".modal");

const overlay=document.querySelector(".overlay");

const showModal=document.querySelectorAll(".show-modal");

console.log(showModal)

for(let i=0;i<showModal.length;i++){
    showModal[i].addEventListener("click",function(){
        console.log("button clicked",showModal[i].textContent);
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");

    })
}



