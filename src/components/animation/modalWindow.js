const modalWindow = () => {
  const shipsSection = document.querySelectorAll(".buhta-boat__boat");
  const modalWindow = document.querySelector("#cards__modal-window");

  //looping through ships with adding onClick event

  Array.from(shipsSection).forEach((boat) => {
    const firstClick = boat.addEventListener("click", function (e) {
      const clone = e.currentTarget.cloneNode(true);
      modalWindow.style.display = "flex";
      clone.style.backgroundColor = "white";
      // desc.style.display = "block";
      clone.lastElementChild.style.display = "block";
      clone.classList.remove("buhta-boat__boat");
      clone.classList.add("clicked__boat");
      modalWindow.appendChild(clone);
    });
  });

  modalWindow.addEventListener("click", function (e) {
    if (
      e.target.parentNode.className === ".buhta-boat__boat" ||
      e.target.className === ".buhta-boat__boat"
    ) {
      return;
    }
    modalWindow.style.display = "none";
    console.log(modalWindow);
    modalWindow.removeChild(modalWindow.firstChild);
  });
};

export default modalWindow;
