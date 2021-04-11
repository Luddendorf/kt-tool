export default function validateInput(input, regExp) {
  if (regExp.test(input.value)) {
    input.classList.add("form__input-succes");
    input.classList.remove("form__input-error");
    return true;
  } else {
    input.classList.remove("form__input-succes");
    input.classList.add("form__input-error");
    return false;
  }
}
