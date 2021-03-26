"use strict";

let mainForm = document.forms.main;
let iframeForm = document.forms.iframe;
let mainInput = document.querySelector("#main-input");
let iframeInput = document.querySelector("#iframe-input");
let mainSubmit = document.querySelector('#main-submit');
let checkbox = document.querySelector(".checkbox");
let radio = document.querySelectorAll("input[type=radio]");


function getData() {
   document.querySelector('textarea').innerHTML = mainInput.value
}

mainSubmit.addEventListener('click', getData);

checkbox.addEventListener("click", function () {
 radio.forEach((item)=>{
    if (checkbox.checked) {
        item.disabled = true
    }else{
        item.disabled = false
    }
 })
});