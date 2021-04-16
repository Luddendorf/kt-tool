export default function dropdownClick() {
  const dropdownImg = document.querySelector(".dropdown__img");
  const dropdownContent = document.querySelector(".dropdown__content");

  if (dropdownImg) {
    dropdownImg.addEventListener("click", dropdownToggle);
  }

  function dropdownToggle() {
    dropdownContent.classList.toggle("dropdown__content-active");
  }
}
