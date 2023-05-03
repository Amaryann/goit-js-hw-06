const input = document.getElementById("validation-input");
const number = input.getAttribute("data-length");
const check = () => {
    console.log([...input.value].length)
    console.log(input.classList)
    if ([...input.value].length == number){
        if (input.classList.length === 0){
            input.classList.add("valid");
        }
        else{
            input.classList.replace("invalid", "valid")
        }
    }
    else{
        if (input.classList.length === 0){
            input.classList.add("invalid");
        }
        else{
            input.classList.replace("valid", "invalid")
        }
    }
}