const range = document.getElementById("font-size-control");
const span = document.getElementById("text");
const change = () => {
    span.style.fontSize = range.value+"px"
}