function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  if (amount < 1 || amount > 100) {
    return "Wrong amount";
  }
  const baseSize = 30;
  boxes.innerHTML = "";
  let fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = baseSize + i * 10;
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.textContent = i + 1;
    fragment.appendChild(box);
  }
  boxes.appendChild(fragment);
}

function getInputAndCreateBoxes() {
  const amount = Number(inputSelector.value);
  console.log(amount);

  createBoxes(amount);
  inputSelector.value = "";
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

const inputSelector = document.querySelector("input");
const dataCreate = document.querySelector("button[data-create]");
const dataDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

dataCreate.addEventListener("click", getInputAndCreateBoxes);
dataDestroy.addEventListener("click", destroyBoxes);
