const validator = () => {
  const name = document.querySelector("#cap_name");
  const submit = document.querySelector('button[type="submit"]');

  const form = {
    name: null,
  };

  submit.addEventListener("click", function (e) {
    e.preventDefault();
    let formName = name;
    const reg = /^[a-zа-яА-ЯA-Z0-9 ]*$/;
    const bgc = formName.style.backgroundColor;
    if (formName.match(reg)) {
      form.name = formName;
      bgc = "#056429";
      setTimeout(function () {
        bgc = "#fff";
      }, 1000);
    } else {
      bgc = "#ff0000";
      setTimeout(function () {
        bgc = "#fff";
      }, 1000);
    }
  })

};

export default validator;
