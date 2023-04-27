let form = document.querySelector("form");
let email = document.querySelector("#email");
let submitButton = document.querySelector("#submit");


form.onsubmit = function (e) {
  let emailValid = false;

  if (email.value !== "" && email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailValid = true;
  }
  if (emailValid === false) {
    e.preventDefault()
  }
  submitButton.onclick = function (t) {
    if (emailValid === false) {
      email.classList.add('false')
      form.classList.add('false')
    }
  }
}