const form = document.getElementsByClassName('login-form')[0]
const onSubmit = (event) => {
    let data = {};
    event.preventDefault();
    allFilledIn = true;
    const {
        elements: {email,
        password,},
    } = event.currentTarget;
    if (email.value === "" || password.value === ""){
        return alert("Всі поля повинні бути завповнені.")
    }
    console.log({email: email.value, password: password.value})
    event.currentTarget.reset();
}
form.addEventListener("submit", onSubmit)