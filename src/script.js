"use strict"

const checkbox = document.querySelector(".checkbox")
const radio = document.querySelectorAll(".radio")

checkbox.addEventListener("click", function () {
    radio.forEach((item)=>{
        if (checkbox.checked) {
            item.disabled = true
        }else{
            item.disabled = false
        }
    })
});