// Function for changing colors
const ChangingClass = (element, add, remove) => {
    element.classList.add(add);
    element.classList.remove(remove);
};

// Functions
let verifyUserName = () => {
    let inputForUsername = document.getElementById('inputForUsername');
    let paragraphForUsername_empty = document.getElementById('paragraphForUsername_empty');
    let paragraphForUsername_capitalAlphabets = document.getElementById('paragraphForUsername_capitalAlphabets');
    let paragraphForUsername_freeSpaces = document.getElementById('paragraphForUsername_freeSpaces');
    let username = inputForUsername.value;

    if (username === "") {
        ChangingClass(paragraphForUsername_empty, 'dotRed', 'dotGreen');
        ChangingClass(paragraphForUsername_capitalAlphabets, 'dotRed', 'dotGreen');
        ChangingClass(paragraphForUsername_freeSpaces, 'dotRed', 'dotGreen');
    } else if (username.match(/[A-Z]/) && username.includes(" ")) {
        ChangingClass(paragraphForUsername_empty, 'dotRed', 'dotGreen');
        ChangingClass(paragraphForUsername_capitalAlphabets, 'dotRed', 'dotGreen');
        paragraphForUsername_empty.innerText = 'Username is not correct';
        ChangingClass(paragraphForUsername_freeSpaces, 'dotRed', 'dotGreen');
    } else if (username.match(/[A-Z]/)) {
        paragraphForUsername_empty.innerText = 'Username is not correct';
        ChangingClass(paragraphForUsername_empty, 'dotRed', 'dotGreen');
        ChangingClass(paragraphForUsername_capitalAlphabets, 'dotRed', 'dotGreen');
        ChangingClass(paragraphForUsername_freeSpaces, 'dotGreen', 'dotRed');
    } else if (username.match(/[-]/)) {
        paragraphForUsername_empty.style.display = 'none';
        paragraphForUsername_capitalAlphabets.innerHTML = 'Minus is not allowed';
        ChangingClass(paragraphForUsername_capitalAlphabets, 'dotRed', 'dotGreen');
        paragraphForUsername_freeSpaces.style.display = 'none';
    } else if (username.includes(" ")) {
        paragraphForUsername_empty.innerText = 'Username is not correct';
        ChangingClass(paragraphForUsername_empty, 'dotRed', 'dotGreen');
        ChangingClass(paragraphForUsername_capitalAlphabets, 'dotGreen', 'dotRed');
        ChangingClass(paragraphForUsername_freeSpaces, 'dotRed', 'dotGreen');
    } else {
        ChangingClass(paragraphForUsername_empty, 'dotGreen', 'dotRed');
        ChangingClass(paragraphForUsername_capitalAlphabets, 'dotGreen', 'dotRed');
        paragraphForUsername_empty.innerText = 'Username is correct';
        ChangingClass(paragraphForUsername_empty, 'dotGreen', 'dotRed');
    }
};

let verifyEmail = () => {
    let inputForEmail = document.getElementById('inputForEmail');
    let paragraphForEmail_Empty = document.getElementById('paragraphForEmail_Empty');
    let paragraphForEmail_validation = document.getElementById('paragraphForEmail_validation');
    const email = inputForEmail.value;
    const emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/; 

    if (email === "") {
        ChangingClass(paragraphForEmail_Empty, 'dotRed', 'dotGreen');
    } else {
        paragraphForEmail_Empty.style.display = 'none';
    }

    if (!emailCheck.test(email)) {
        ChangingClass(paragraphForEmail_validation, 'dotRed', 'dotGreen');
    } else {
        paragraphForEmail_validation.innerText = 'Email is valid';
        ChangingClass(paragraphForEmail_validation, 'dotGreen', 'dotRed');
    }
};

let verifyPassword = () => {
    let inputForPassword = document.getElementById('inputForPassword');
     let paragraphForPassword_empty = document.getElementById('paragraphForPassword_empty');
    let paragraphForPassword_freeSpaces = document.getElementById('paragraphForPassword_freeSpaces');
    let paragraphForPassword_length = document.getElementById('paragraphForPassword_length');
    let paragraphForPassword_capitalAlphabets = document.getElementById('paragraphForPassword_capitalAlphabets');
    let paragraphForPassword_lowerCaseAlphabets = document.getElementById('paragraphForPassword_lowerCaseAlphabets');
    let paragraphForPassword_digit = document.getElementById('paragraphForPassword_digit');
    let paragraphForPassword_symbol = document.getElementById('paragraphForPassword_symbol');    

    if (inputForPassword.value === "") {
        ChangingClass(paragraphForPassword_empty, 'dotRed', 'dotGreen');
    } else {
        paragraphForPassword_empty.style.display = 'none';
    }

    if (inputForPassword.value.includes(" ")) {
        ChangingClass(paragraphForPassword_freeSpaces, 'dotRed', 'dotGreen');
    } else if (inputForPassword.value === "") {
        ChangingClass(paragraphForPassword_freeSpaces, 'dotRed', 'dotGreen');
    } else {
        ChangingClass(paragraphForPassword_freeSpaces, 'dotGreen', 'dotRed');
    }

    if (inputForPassword.value.length < 8 || inputForPassword.value.length > 16) {
        ChangingClass(paragraphForPassword_length, 'dotRed', 'dotGreen');
    } else {
        ChangingClass(paragraphForPassword_length, 'dotGreen', 'dotRed');
    }

    if (!/[A-Z]/.test(inputForPassword.value)) {
        ChangingClass(paragraphForPassword_capitalAlphabets, 'dotRed', 'dotGreen');
    } else {
        ChangingClass(paragraphForPassword_capitalAlphabets, 'dotGreen', 'dotRed');
    }

    if (!/[a-z]/.test(inputForPassword.value)) {
        ChangingClass(paragraphForPassword_lowerCaseAlphabets, 'dotRed', 'dotGreen');
    } else {
        ChangingClass(paragraphForPassword_lowerCaseAlphabets, 'dotGreen', 'dotRed');
    }

    if (!/\d/.test(inputForPassword.value)) {
        ChangingClass(paragraphForPassword_digit, 'dotRed', 'dotGreen');
    } else {
        ChangingClass(paragraphForPassword_digit, 'dotGreen', 'dotRed');
    }

    if (!/[*&^%$#@!]/.test(inputForPassword.value)) {
        ChangingClass(paragraphForPassword_symbol, 'dotRed', 'dotGreen');
    } else {
        ChangingClass(paragraphForPassword_symbol, 'dotGreen', 'dotRed');
    }
};

let confirmPassword = () => {
    let inputForPassword = document.getElementById('inputForPassword');
    let inputForconfirmPassword = document.getElementById('inputForConfirmPassword');
    let confirmPassword = document.getElementById('confirmPassword');
    if (inputForconfirmPassword.value === "") {
        confirmPassword.innerText = "Confirm your password";
        ChangingClass(confirmPassword, 'dotRed', 'dotGreen');
    } else if (inputForconfirmPassword.value !== inputForPassword.value){
        confirmPassword.innerText = 'Passwords do not match';
        ChangingClass(confirmPassword, 'dotRed', 'dotGreen');
    } else {
        confirmPassword.innerText = 'Password match';
        ChangingClass(confirmPassword, 'dotGreen', 'dotRed');
    }
};

// Form submitting
let submit = document.getElementById("submit");
submit.addEventListener('click', (e) => {
    e.preventDefault();
    verifyUserName();
    verifyEmail();
    verifyPassword();
    confirmPassword();
});

// Keypress for inputs
let inputForUsername = document.getElementById('inputForUsername').addEventListener('input', () => {
    verifyUserName();
});
let inputForEmail = document.getElementById('inputForEmail').addEventListener('input', () => {
    verifyEmail();
});
let inputForPassword = document.getElementById('inputForPassword').addEventListener('input', () => {
    verifyPassword();
});
let inputForconfirmPassword = document.getElementById('inputForConfirmPassword').addEventListener('input', () => {
    confirmPassword();
});
