const HamburgerMenu = () => {
  const main = document.querySelector(".main");
  const mainScreen = document.querySelector(".cards");
  const burgerMenuBtn = document.querySelector(".burger__menu");
  const leftMenu = document.querySelector(".left-menu");
  const sideBar = document.querySelector(".menu");
  const closeBurger = document.querySelector(".burger__close");

  burgerMenuBtn.addEventListener("click", function (e) {
    burgerMenuBtn.style.display = "none";
    leftMenu.style.display = "block";
    closeBurger.style.display = "block";
    sideBar.style.display = "block";
  });

  closeBurger.addEventListener("click", function (e) {
    leftMenu.style.display = "none";
    closeBurger.style.display = "none";
    sideBar.style.display = "none";
    burgerMenuBtn.style.display = "block";
  });

  mainScreen.addEventListener("click", function (e) {});
};
export default HamburgerMenu;
