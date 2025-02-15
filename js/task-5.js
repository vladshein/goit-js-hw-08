function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonListen = document.querySelector(".change-color");
const bodyListen = document.querySelector("body");
const spanListen = document.querySelector(".color");

buttonListen.addEventListener("click", clickHandler);

function clickHandler(event) {
  const color = getRandomHexColor();
  bodyListen.style.backgroundColor = color;
  spanListen.style.color = color;
}
