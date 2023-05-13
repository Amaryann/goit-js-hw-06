function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorTitle = document.querySelector(".color");
const button = document.getElementsByClassName("change-color")[0];
console.log(button);
console.log(colorTitle);
button.addEventListener("click", () => {
  let hexColor = getRandomHexColor();
  document.body.style.backgroundColor = hexColor;
  colorTitle.textContent = hexColor;
})