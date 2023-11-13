const signUpElement = document.getElementById("sign__up__form__container");
const input = document.getElementById("monthly__news__letter__input");
const submitButton = document.getElementById(
  "monthly__news__letter__subscribe__button"
);
const form = document.getElementById("monthly__news__letter__form");
const error = document.getElementById("email__error__message");
const success = document.getElementById("success__message__container");
const dismissButton = document.getElementById(
  "success__message__dismiss__button"
);
const recipient = document.getElementById("success__message__email__recipient");

submitButton.addEventListener("click", (e) => {
  if (input.value.includes("@")) {
    e.preventDefault();
    signUpElement.style.setProperty("display", "none");
    recipient.innerHTML = input.value;
    success.style.setProperty("display", "flex");
  } else {
    e.preventDefault();
    console.log("email does not have an @ symbol");
    input.style.setProperty("border", "1px solid red");
    input.style.setProperty("background-color", "#FFE8E6");
    input.style.setProperty("color", "red");
    error.style.setProperty("display", "block");
  }
});

dismissButton.addEventListener("click", (e) => {
  success.style.setProperty("display", "none");
});
