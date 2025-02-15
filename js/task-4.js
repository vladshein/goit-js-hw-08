/*
Напиши скрипт управління формою логіна.
*/

const form = document.querySelector("form.login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;

  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const finalObject = {};

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return console.log("All form fields must be filled in");
  }

  finalObject.email = email.trim();
  finalObject.password = password.trim();

  console.log(finalObject);
  form.reset();
}
