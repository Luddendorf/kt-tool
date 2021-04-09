import "./sass/main.scss";
import "./components/main/mainContent";

function initContactUsFormValidation() {
  const nameInput = document.getElementById("contact-form__name");
  if (!nameInput) {
    return;
  }
  const emailInput = document.getElementById("contact-form__email");
  const phoneInput = document.getElementById("contact-form__phone");

  const nameErrorHolder = document.getElementById(
    "contact-form__name--error-message"
  );
  const emailErrorHolder = document.getElementById(
    "contact-form__email--error-message"
  );
  const phoneErrorHolder = document.getElementById(
    "contact-form__phone--error-message"
  );
  const globalFormErrorHolder = document.getElementById(
    "contact-form__button--error-message"
  );
  const buttonSend = document.getElementById("contact-form__button-send");

  // Possible phone numbers: +1234567890 1234567890
  nameInput.addEventListener("blur", (event) =>
    validateInput(nameErrorHolder, nameInput.value, "personName")
  );
  emailInput.addEventListener("blur", (event) =>
    validateEmailOrPhone(
      phoneErrorHolder,
      emailErrorHolder,
      emailInput.value,
      phoneInput.value
    )
  );
  phoneInput.addEventListener("blur", (event) =>
    validateEmailOrPhone(
      phoneErrorHolder,
      emailErrorHolder,
      emailInput.value,
      phoneInput.value
    )
  );

  buttonSend.addEventListener("click", (event) => {
    event.preventDefault();
    validateAllBeforeSend(
      nameInput,
      emailInput,
      phoneInput,
      nameErrorHolder,
      emailErrorHolder,
      phoneErrorHolder
    );
  });
}

function validateAllBeforeSend(
  name,
  email,
  phone,
  nameErrorHolder,
  emailErrorHolder,
  phoneErrorHolder
) {
  while (privacyPolicyErrorHolder.firstChild) {
    privacyPolicyErrorHolder.firstChild.remove();
  }
  if (
    /^([а-яА-ЯёЁa-zA-Z '-]){2,60}$/g.test(name.value) &&
    (/^\w+@\w+\.\w{2,3}$/g.test(email.value) ||
      /^\+?\d{5,12}$/g.test(phone.value))
  ) {
    let emailToSend;
    let phoneToSend;

    if (/^\w+\.?\w+@\w+\.\w{2,3}$/g.test(email.value)) {
      emailToSend = email.value;
    }

    if (/^\+?\d{5,12}$/g.test(phone.value)) {
      phoneToSend = phone.value;
    }

    let dataToSend = {
      name: name.value,
      email: emailToSend,
      phone: phoneToSend,
    };
    if (!emailToSend) {
      delete dataToSend.emailToSend;
    }
    if (!phoneToSend) {
      delete dataToSend.phoneToSend;
    }

    sendContactUsForm(dataToSend);

    clearForm(
      name,
      companyName,
      email,
      phone,
      country,
      comments,
      hasAgreedToPrivacyPolicy
    );
  } else {
    validateInput(nameErrorHolder, name.value, "personName");
    validateEmailOrPhone(
      phoneErrorHolder,
      emailErrorHolder,
      email.value,
      phone.value
    );
  }
}
