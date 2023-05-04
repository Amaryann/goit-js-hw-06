function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const box = document.getElementById("boxes");

const createBoxes = (number) => {
  for (let i = 0; i < number; i++) {
    console.log("box")
    box.innerHTML += `<div class="box" style="background-color: ${getRandomHexColor()}; height: ${30+(10*i)}px; width: ${30+(10*i)}px; "></div>`
  }
}
const destroyBoxes = () => {
  box.innerHTML = "";
}