const nav = document.querySelector(".nav__list");
const navItems = document.querySelectorAll(".nav__list-item");
const ships = document.querySelector(".ships");
const about = document.querySelector(".about");

nav.addEventListener("click", (event) => {
  if (!event.target.classList.contains("active")) {
    for (let item of navItems) {
      item.classList.toggle("active");
      item.classList.toggle("inactive");
    }
    ships.classList.toggle("ships-close");
    about.classList.toggle("about-show");
  }
});

export default nav;
