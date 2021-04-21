const DropDownAnchor = () => {
  const anchor = document.querySelector(".anchor");
  const treasureMenu = document.querySelector(".anchor__treasure");
  const ddMenu = document.querySelector(".anchor__drop-down_menu");
  const ddMenuLi = document.querySelectorAll("drop-down_li");

  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    treasureMenu.classList.toggle("anchor_active");
    if (ddMenu.classList.contains("anchor_active_dd-menu")) {
      ddMenu.classList.remove("anchor_active_dd-menu");
    }
  });

  treasureMenu.addEventListener("click", (e) => {
    e.preventDefault();
    ddMenu.classList.toggle("anchor_active_dd-menu");
  });

  ddMenu.addEventListener("click", (e) => {
    if (e.target.className === "drop-down_li") {
      e.target.classList.add("drop-down_li-active");
    }
  });
};

export default DropDownAnchor;
