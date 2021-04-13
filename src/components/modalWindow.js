const modalWindow = () => {
  const shipsSection = document.querySelectorAll(".buhta-boat__boat");
  const modalWindow = document.querySelector("#cards__modal-window");
  const desc = document.querySelector(".desc");
  console.log(desc);

  Array.from(shipsSection).forEach((boat) => {
    boat.addEventListener("click", function (e) {
      const clone = e.currentTarget.cloneNode(true);
      modalWindow.style.display = "flex";
      clone.style.transition = "0.5s";
      clone.style.backgroundColor = "white";
      desc.style.display = "block";
      clone.append(desc);
      modalWindow.append(clone);
    });
  });

  modalWindow.addEventListener("click", function (e) {
    if (e.target.className === ".buhta-boat__boat") {
      return;
    }
    modalWindow.style.display = "none";
    modalWindow.removeChild(modalWindow.firstChild);
  });
};

export default modalWindow;
