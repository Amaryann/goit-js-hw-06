function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const box = document.getElementById("boxes");
const input = document.getElementById("input")
document.getElementsByClassName("button-create")[0].addEventListener("click", () => {
  let boxString = "";
  const number = document.getElementById("input").value
  for (let i = 0; i < number; i++) {
    boxString += `<div class="box" style="background-color: ${getRandomHexColor()}; height: ${30+(10*i)}px; width: ${30+(10*i)}px; "></div>`
  }
  box.insertAdjacentHTML("afterbegin", boxString);
});
document.getElementsByClassName("button-destroy")[0].addEventListener("click", () => {
  box.innerHTML = "";
});