export const dropDownBtn = function(filterBtn){
    filterBtn.onclick = function (e) {
    const childrenArr = Array.from(e.currentTarget.children);
    for (let i = 0; i < childrenArr.length; i++) {
      console.log("for", e.currentTarget.tagName);
      if (e.currentTarget.children[i].lastElementChild.tagName == "UL") {
        e.currentTarget.children[i].lastElementChild.removeAttribute("class");
        e.currentTarget.children[i].lastElementChild.classList.add("displayNone");
      }
    }
    console.log(
      e.target.nextElementSibling.nextElementSibling.nextElementSibling
    );
    if (
      e.target.nextElementSibling.nextElementSibling.nextElementSibling.tagName ==
      "UL"
    ) {
      e.target.nextElementSibling.nextElementSibling.nextElementSibling.removeAttribute(
        "class"
      );
      e.target.nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
        "display-flex"
      );
    }
  };
}
