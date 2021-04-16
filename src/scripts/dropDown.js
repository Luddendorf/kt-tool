import anchor from "../src/img/anchor.png";

export default function createDropDownMenu() {
  const dropdown = document.querySelector(".dropdown");
  const dropdownImg = `
    <img src="${anchor}" alt="anchor" class="dropdown__img" />
  `;
  const dropdownContent = `
    <div class="dropdown__content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  `;
  const dropdownMenu = `
    ${dropdownImg}
    ${dropdownContent}
  `;
  dropdown.insertAdjacentHTML("afterbegin", dropdownMenu);
}
