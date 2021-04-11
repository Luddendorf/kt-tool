const burgerMenu = document.querySelector(".burger-menu");
const applyBtn = document.querySelector(".filters__apply");
const sidebar = document.querySelector(".sidebar");

const closeMenuBtns = [burgerMenu, applyBtn];

closeMenuBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.toggle("lock");
    burgerMenu.classList.toggle("burger-menu-active");
    sidebar.classList.toggle("sidebar-burger");
  });
});

export default closeMenuBtns;
