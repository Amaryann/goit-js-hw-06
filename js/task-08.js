const form = document.getElementsByClassName('login-form')[0]
const onSubmit = () => {
    let data = {};
    allFilledIn = true;
    form.querySelectorAll("input").forEach(input => {
        if (input.value == ""){
            allFilledIn = false;
        }
    });
    if(allFilledIn){
        form.querySelectorAll("input").forEach(input => {
            data[input.type] = input.value
        })
        console.log(data)
        form.reset()
    }
    else{
        alert("Всі поля повинні бути заповнені");
    }
    return false
}
