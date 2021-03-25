const form = document.getElementsByTagName("form");
const checkBox = document.getElementById("check");
const selectGroup = document.getElementById("select");

if (localStorage.name === "" && localStorage.text === "") {
  form[0].name.value = "";
  form[0].text.value = "";
} else if (form[0].id === "child") {
  form[0].name.value = "отР_" + localStorage.name;
  form[0].text.value = "отР_" + localStorage.text;
} else if (form[0].id === "parent") {
  form[0].name.value = "отД_" + localStorage.name;
  form[0].text.value = "отД_" + localStorage.text;
}

form[0].onsubmit = function (e) {
  e.preventDefault();
  let name = e.target.name.value;
  let text = e.target.text.value;
  console.log(e);
  if (
    (name.startsWith("отР_") || name.startsWith("отД_")) &&
    (text.startsWith("отР_") || text.startsWith("отД_"))
  ) {
    name = name.slice(4);
    text = text.slice(4);
  }

  if (form[0].id === "parent") {
    localStorage.name = name;
    localStorage.text = text;
    document.location.href = "./child.html";
  } else if (form[0].id === "child") {
    localStorage.name = name;
    localStorage.text = text;
    document.location.href = "./index.html";
  }
};

form[0].onreset = function (e) {
  localStorage.name = "";
  localStorage.text = "";
};

checkBox.onchange = function (e) {
  const radioGroup = document.getElementById("radio-group");
  const radioArr = radioGroup.childNodes;
  if (checkBox.checked === true) {
    for (let i = 0; i < radioArr.length; i++) {
      radioArr[i].disabled = true;
    }
  } else {
    for (let i = 0; i < radioArr.length; i++) {
      radioArr[i].disabled = false;
    }
  }
};

selectGroup.onchange = function (e) {
  form[0].name.value = e.target.value.split(" ")[0];
  form[0].text.value =
    e.target.value.split(" ")[0] +
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
};
