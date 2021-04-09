const menuItems = document.querySelectorAll(".menu__item");

for (let item of menuItems) {
  item.addEventListener("click", function () {
    const subMenu = this.nextElementSibling;

    if (this.classList.contains("menu__item-active")) {
      this.classList.remove("menu__item-active");
      subMenu.style.height = null;
    } else {
      for (let item of menuItems) {
        item.classList.remove("menu__item-active");
        item.nextElementSibling.style.height = null;
      }
      this.classList.add("menu__item-active");
      subMenu.style.height = subMenu.scrollHeight + "px";
    }
  });
}

export default menuItems;
