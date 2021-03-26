let checkbox = document.querySelector(".checkbox");
let radio = document.querySelectorAll("input[type=radio]");
let myIFrame = document.querySelector("#myIFrame")

checkbox.addEventListener("click", function () {
  radio.forEach((item)=>{(checkbox.checked) ? (item.disabled = true) : (item.disabled = false)})
})

