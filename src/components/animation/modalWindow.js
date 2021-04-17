const modalWindow = () => {
  const shipsSection = document.querySelectorAll(".buhta-boat__boat");
  const modalWindow = document.querySelector("#cards__modal-window");
  const closeBtn = document.createElement("span");

  //looping through ships with adding onClick event

  Array.from(shipsSection).forEach((boat) => {
    boat.addEventListener("click", function (e) {
      closeBtn.innerHTML = `<i class="fas fa-times"></i>`;
      closeBtn.classList.add("close_btn");
      const clone = e.currentTarget.cloneNode(true);
      modalWindow.style.display = "flex";
      // clone.style.backgroundColor = "white";
      clone.lastElementChild.style.display = "block";
      clone.appendChild(closeBtn);
      clone.style.background = "#fff";
      clone.classList.remove("buhta-boat__boat");
      clone.classList.add("clicked__boat");
      modalWindow.appendChild(clone);
    });
  });

  modalWindow.addEventListener("click", function (e) {
    if (e.target.classList.contains("fas")) {
      modalWindow.style.display = "none";
      modalWindow.removeChild(modalWindow.firstChild);
    }
  });
};

export default modalWindow;
