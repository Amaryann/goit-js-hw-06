function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const box = document.getElementById("boxes");

const createBoxes = (number) => {
  let boxString = "";
  for (let i = 0; i < number; i++) {
    boxString += `<div class="box" style="background-color: ${getRandomHexColor()}; height: ${30+(10*i)}px; width: ${30+(10*i)}px; "></div>`
  }
  box.insertAdjacentHTML("afterbegin", boxString);
}
const destroyBoxes = () => {
  box.innerHTML = "";
}