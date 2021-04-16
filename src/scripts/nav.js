const nav = document.querySelector(".nav__list");
const navItems = document.querySelectorAll(".nav__list-item");
const pier = document.querySelector(".pier");
const about = document.querySelector(".about");
const gallery = document.querySelector(".gallery");

nav.addEventListener("click", (event) => {
  if (event.target.classList.contains("inactive")) {
    for (let item of navItems) {
      item.classList.remove("active");
      item.classList.add("inactive");
    }

    if (event.target.id === "gallery") {
      pier.classList.add("display-none");
      about.classList.add("display-none");
      gallery.classList.add("gallery-show");
    } else if (event.target.id === "pier") {
      pier.classList.remove("pier-close", "display-none");
      about.classList.remove("about-show", "display-none");
      gallery.classList.remove("gallery-show");
    } else if (event.target.id === "my-ship") {
      pier.classList.add("pier-close");
      about.classList.add("about-show");
      pier.classList.remove("display-none");
      about.classList.remove("display-none");
      gallery.classList.remove("gallery-show");
    }

    event.target.classList.remove("inactive");
    event.target.classList.add("active");
  }
});

export default nav;
