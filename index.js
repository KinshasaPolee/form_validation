let btn = document.getElementById('submit')
function validateForm(e) {

    e.returnValue = false
    // Email validation
    let emailInput = document.getElementById("email").value;
    let emailValue = emailInput.toLowerCase();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
        alert("Invalid email format!");
        return false;
    }

    if (emailValue.endsWith("@example.com")) {
        alert("Email from 'example.com' domain is not allowed!");
        return false;
    }

    // Password validation
    let passwordValue = document.getElementById("password").value;
    let passwordCheckValue = document.getElementById("passwordCheck").value;

    if (passwordValue.length < 12) {
        alert("Password must be at least 12 characters long!");
        return false;
    }

    if (!/[a-z]/.test(passwordValue) || !/[A-Z]/.test(passwordValue) || !/\d/.test(passwordValue) || !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(passwordValue)) {
        alert("Password must have at least one uppercase letter, one lowercase letter, one number, and one special character!");
        return false;
    }

    if (passwordValue.toLowerCase().includes("password")) {
        alert("Password cannot contain the word 'password'!");
        return false;
    }

    if (passwordValue === emailValue) {
        alert("Password cannot be the same as the email!");
        return false;
    }

    if (passwordValue !== passwordCheckValue) {
        alert("Passwords do not match!");
        return false;
    }
    // Username validation
    let usernameInput = document.getElementById("username").value;
    let usernameValue = usernameInput.toLowerCase();

    localStorage.setItem("username", usernameValue);
    localStorage.setItem("email", emailValue);
    localStorage.setItem("password", passwordValue);

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("passwordCheck").value = "";
    alert("Registration successful!");

    return true;
}
submit.addEventListener('click', validateForm)

// let myForm = document.getElementById("registration");

// document.getElementById("submit").addEventListener("click", function () {
//     validateForm();
    
//     Array.from(myForm.elements).forEach((element) => {
//         if (element.type !== "submit") {
//             element.value = "";
//         }
//     });
// });

// Login Form- username validation
document.getElementById("login").addEventListener("submit", function(event) {
event.preventDefault();

let bunnyLogUser = document.getElementById("getUsername").value.trim();
let storeBunnyLogUser = localStorage.getItem("username");

if (storeBunnyLogUser && storeBunnyLogUser === bunnyLogUser) {
    console.log("Login Successful");
} else {
    console.log("Invalid username. Please try again.");
}
});