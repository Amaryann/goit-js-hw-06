let counterValue = 0;
const span = document.getElementById("value");
function dec(){
    counterValue-=1
    span.innerHTML = counterValue;
}
function inc(){
    counterValue+=1
    span.innerHTML = counterValue;
}