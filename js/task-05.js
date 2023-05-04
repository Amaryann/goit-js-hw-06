const input = document.getElementById("name-input")
const output = document.getElementById("name-output")
const changeOutput = () => {
    if (input.value !== ""){
        output.innerHTML = input.value;
    }
    else{
        output.innerHTML = "Anonymous"
    }
}