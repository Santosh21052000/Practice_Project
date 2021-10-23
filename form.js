console.log('form validation project');
const nam = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

let validUser = false;
let validEmail = false;
let validPhone = false;
document.getElementById("success").hidden=true;
document.getElementById("failure").hidden=true;
nam.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){1,10}$/;//minimum 2 character start with alphabet and end after 10 character property of $
    let str = nam.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your name is valid');
        nam.classList.remove('is-invalid');
        validUser = true;
    }
    else {
        console.log('Your name is not valid');
        nam.classList.add('is-invalid');
        validUser = false;

    }
});
email.addEventListener('blur', () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
});
phone.addEventListener('blur', () => {

    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;

    }
});

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    let failure = document.getElementById('failure');
    let success = document.getElementById('success');
    e.preventDefault();
    console.log('you click on submit');
    if (validEmail && validPhone && validUser) {
        console.log('Phone, email and user are valid. Submitting the form');
        document.getElementById("success").hidden=false;
        document.getElementById("failure").hidden=true;
        success.classList.add('show');
        failure.classList.remove('show');
    }
    else {
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        document.getElementById("success").hidden=true;
        document.getElementById("failure").hidden=false;
        failure.classList.add('show');
        success.classList.remove('show');
    }

})