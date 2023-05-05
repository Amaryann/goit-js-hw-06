const input = document.getElementById("name-input")
const output = document.getElementById("name-output")
const changeOutput = () => {
    if (input.value !== ""){
        output.textContent = input.value;
    }
    else{
        output.textContent = "Anonymous"
    }
}