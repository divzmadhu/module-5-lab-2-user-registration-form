/*
===========================================================
PROJECT   : 'pah-SAZH'- A Interactive User Registration Form
Module 5  : The Document Object Model 
Lab 2     : Interactive User Registration Form
Concepts 
Used      : DOM manipulation, event handling, HTML5, JavaScript form validation and local storage 
DATE      : September 25, 2026

OBJECTIVES:
1. Structure an HTML form with appropriate input fields for registration.
2. Implement real-time input validation using JavaScript event listeners (input event).
3. Use HTML5 validation attributes (e.g., required, type, minlength, pattern).
4. Apply the JavaScript Constraint Validation API to check validity and display custom error messages.
5. Dynamically create and display error messages next to input fields.
6. Handle the form submit event, prevent default submission, and perform final validation.
7. Use localStorage to save and retrieve simple form data (e.g., username).    
============================================================= */

const form = document.getElementById("registrationForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
// const termsInput = document.getElementById("terms");



const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
// const termsError = document.getElementById("termsError");

// console.log(JSON.parse(localStorage.getItem("user-local")));

// For the purpose of local storage

const savedUser = localStorage.getItem("user-local");
if (savedUser) {
    const user = JSON.parse(savedUser);
    usernameInput.value = user.username;
    emailInput.value = user.email;
}

// const user = {
//     username : "",
//     email: "",
// }


//Testing to see if DOM works

// event.preventDefault();

// Initial Check
// console.log(usernameInput.value.trim());
// console.log(emailInput.value.trim());
// console.log(passwordInput.value.trim());
// console.log(confirmPasswordInput.value.trim());


//1. Validaing the username

usernameInput.addEventListener("input", validateUsername);

function validateUsername() {
    // const username = usernameInput.value.trim();
    // if (username === "") {
    //     usernameError.textContent = "Username is required!";
    //     return false;
    // }

    if (usernameInput.validity.valueMissing) {
        usernameError.textContent = "Username is required";
        return false;
    }

    else if (usernameInput.validity.tooShort) {
        usernameError.textContent = "Username must be at least 3 characters!";
        return false;
    }
    else {
        usernameError.textContent = "";
        return true;
    }



}

//2. Validating the email

emailInput.addEventListener("input", validateEmail);
function validateEmail() {
    // const email = emailInput.value.trim();
    // if (email === "")
    // {
    //     emailError.textContent = "Email is required";
    //     return false;
    // }
    if (emailInput.validity.valueMissing) {
        emailError.textContent = "Email is required!";
        return false;
    }

    else if (emailInput.validity.typeMismatch) {
        emailError.textContent = "Please enter a valid email address";
        return false;
    }
    else {
        emailError.textContent = "";
        return true;

    }

}


//3. Validating the Password

// passwordInput.addEventListener("input", function () {
//     validatePassword();
//     validateConfirmPassword();
// });

passwordInput.addEventListener("input", function () {
    validatePassword();

    if (confirmPasswordInput.value !== "") {
        validateConfirmPassword();
    }
});
function validatePassword() {
    if (passwordInput.validity.valueMissing) {
        passwordError.textContent = "Password is required!";
        return false;
    }
    else if (passwordInput.validity.tooShort) {
        passwordError.textContent = "Password must be at least 8 characters";
        return false;
    }
    else if (passwordInput.validity.patternMismatch) {
        passwordError.textContent = "Password must contain an uppercase letter, lowercase letter, and number.";
        return false;
    }
    else {
        passwordError.textContent = "";
        return true;
    }
}

//4. Validating the Confirm Password

confirmPasswordInput.addEventListener("input", validateConfirmPassword);
// confirmPasswordInput.addEventListener("blur", validateConfirmPassword);
function validateConfirmPassword() {
    if (confirmPasswordInput.validity.valueMissing) {
        confirmPasswordError.textContent = "Confirm Password is required!"
        return false;
    }
    else if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordError.textContent = "Passwords do not match"
        return false;
    }
    confirmPasswordError.textContent = "";
    return true;
}

//Validating Terms and conditions



// termsInput.addEventListener("change", validateTerms);

// function validateTerms() {

//     if (termsInput.validity.valueMissing) {
//         termsError.textContent = "You must agree to continue";
//         return false;
//     }
//     else {
//         termsError.textContent = "";
//         return true;
//     }
// }






// Handling Form Submission

form.addEventListener("submit", function (event) {

    event.preventDefault();

    console.log("Submitted Username:", usernameInput.value.trim());
    console.log("Submitted Email:", emailInput.value.trim());

    const usernameValid = validateUsername();
    const emailValid = validateEmail();
    const passwordValid = validatePassword();
    const confirmPasswordValid = validateConfirmPassword();
    // const termsValid = validateTerms();


    if (usernameValid &&
        emailValid &&
        passwordValid &&
        confirmPasswordValid 
        // && termsValid
        ) {
        //Adding local storage
        const user = {
            username: usernameInput.value.trim(),
            email: emailInput.value.trim(),
        };
        localStorage.setItem("user-local", JSON.stringify(user));
        alert("Registration is Successful!");
        form.reset();
    }
    else {
        if (!usernameValid) {
            usernameInput.focus();
        }
        else if (!emailValid) {
            emailInput.focus();
        }
        else if (!passwordValid) {
            passwordInput.focus();
        }
        else if (!confirmPasswordValid) {
            confirmPasswordInput.focus();
        }
        // else if (!termsValid) {
        //     termsInput.focus();
        // }
    }
});

// const togglePassword = document.getElementById("togglePassword");

// togglePassword.addEventListener("click", function () {

//     if (passwordInput.type === "password") {
//         passwordInput.type = "text";
//         togglePassword.textContent = "Hide";
//     }
//     else {
//         passwordInput.type = "password";
//         togglePassword.textContent = "Show";
//     }

// });



