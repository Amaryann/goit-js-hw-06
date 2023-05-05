let counterValue = 0;
const span = document.getElementById("value");
function dec(){
    counterValue-=1
    span.textContent = counterValue;
}
function inc(){
    counterValue+=1
    span.textContent = counterValue;
}