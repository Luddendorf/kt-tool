const sideBarMenu = () => {
  const dropDownMenu = document.querySelector(".left-menu .menu");
  const mainCards = document.querySelector(".main__cards");
  const header = document.querySelector(".header");
  const dropD1 = dropDownMenu.children[0];
  const dropD2 = dropDownMenu.children[1];
  const dropD3 = dropDownMenu.children[2];
  const dropD4 = dropDownMenu.children[3];

  function addDeleteClass(rem, add, add2, add3) {
    rem.classList.remove("closed");
    add.classList.add("closed");
    add2.classList.add("closed");
    add3.classList.add("closed");
  }

  dropDownMenu.addEventListener("click", function (e) {
    switch (e.target.className) {
      case "menu__item sail":
        if (dropD1.classList.contains("closed")) {
          setTimeout(addDeleteClass(dropD1, dropD2, dropD3, dropD4), 100);
        } else {
          setTimeout(function () {
            dropD1.classList.add("closed");
          }, 100);
        }
        break;
      case "menu__item repair":
        if (dropD2.classList.contains("closed")) {
          setTimeout(addDeleteClass(dropD2, dropD1, dropD3, dropD4), 100);
        } else {
          setTimeout(function () {
            dropD2.classList.add("closed");
          }, 100);
        }
        break;
      case "menu__item cannon":
        if (dropD3.classList.contains("closed")) {
          setTimeout(addDeleteClass(dropD3, dropD1, dropD2, dropD4), 100);
        } else {
          setTimeout(function () {
            dropD3.classList.add("closed");
          }, 100);
        }
        break;
      case "menu__item team":
        if (dropD4.classList.contains("closed")) {
          setTimeout(addDeleteClass(dropD4, dropD1, dropD2, dropD3), 100);
        } else {
          setTimeout(function () {
            dropD4.classList.add("closed");
          }, 100);
        }
        break;
    }
  });

  function closeDropDown() {
    this.addEventListener("click", () => {
      dropD1.classList.add("closed");
      dropD2.classList.add("closed");
      dropD3.classList.add("closed");
      dropD4.classList.add("closed");
    });
  }
  closeDropDown.call(mainCards);
  closeDropDown.call(header);
};

export default sideBarMenu;
