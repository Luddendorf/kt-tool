const form = document.getElementsByTagName("form");
const checkBox = document.getElementById("check");

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

checkBox.addEventListener('change', disabledCheckBox);
form[0].addEventListener('reset', resetData);
form[0].addEventListener('submit', getData);

function disabledCheckBox() {
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
}

function resetData() {
  localStorage.name = "";
  localStorage.text = "";
}

function getData(ev) {
  ev.preventDefault();

  let name = ev.target.name.value;
  let text = ev.target.text.value;

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
}