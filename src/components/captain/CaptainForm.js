const CaptainForm = () => {
  const formData = {
    name: null,
    quantity: null,
    class: null,
    price: null,
  };
  const regex = {
    regName: /^[A-Za-z]+/,
    regQuan: /^\d{1,6}$/,
    regClass: /^[1-9]$|^[1-9][0-9]$|^(100)$/,
    regPrice: /^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/,
  };
  const formWrap = document.querySelector(".capain__form-form");
  const formName = document.querySelector("#cap_name");
  const formQuan = document.querySelector("#cap_quantity");
  const formClass = document.querySelector("#cp_class");
  const formPrice = document.querySelector("#cap_price");
  const submit = document.querySelector("button[type='submit']");

  submit.addEventListener("click", function (e) {
    e.preventDefault();
    this.disabled = true;
    setTimeout(() => {
      this.disabled = false;
    }, 2000);

    const nameV = formName.value;
    const quantityV = formQuan.value;
    const clasV = formClass.value;
    const priceV = formPrice.value;
    const props = {
      nameV,
      quantityV,
      clasV,
      priceV,
      formName,
      formQuan,
      formClass,
      formPrice,
    };
    console.log(props);
    formHandler(props);
  });

  function formHandler({
    nameV,
    quantityV,
    clasV,
    priceV,
    formName,
    formQuan,
    formClass,
    formPrice,
  }) {
    let passed = false;
    if (
      regex.regName.test(nameV) &&
      regex.regQuan.test(quantityV) &&
      regex.regClass.test(clasV) &&
      regex.regPrice.test(priceV)
    ) {
      console.log(regex.regName.test(nameV));
      console.log(regex.regQuan.test(quantityV));
      console.log(regex.regClass.test(clasV));
      console.log(regex.regPrice.test(priceV));
      passed = true;
    }
    if (passed === true) {
      formData.name = formName;
      formData.quantity = formQuan;
      formData.class = formClass;
      formData.price = formPrice;
      setResBlock(true);
      console.log("Thank you, form is being processed");
    } else if (passed === false) {
      setResBlock(false);
      console.log("error was found check the form info");
    }
  }
  function setResBlock(check) {
    const resWindow = document.createElement("div");
    const resText = document.createElement("span");
    if (formWrap.lastElementChild === resWindow) {
      formWrap.remove(formWrap.lastElementChild);
    }
    if (check === true) {
      resText.textContent = "Thank you for your vacancy!";
      resText.style.color = "#000";
      resWindow.style.border = "2px solid green";
      resWindow.append(resText);
      resWindow.setAttribute("class", "res__window");
      formWrap.append(resWindow);
    } else {
      resText.textContent = "Check if all info was mention correctly!";
      resText.style.color = "#000";
      resWindow.style.border = "2px solid red";
      resWindow.append(resText);
      resWindow.setAttribute("class", "res__window");
      formWrap.append(resWindow);
    }
    if (resWindow.classList.contains("res__window")) {
      setTimeout(function () {
        formWrap.removeChild(formWrap.lastElementChild);
      }, 2500);
    }
  }
};

export default CaptainForm;
