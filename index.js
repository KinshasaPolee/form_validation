// function validateForm() {
//     // Email validation
//     let emailValue = document.getElementById("email").value;
//     // let emailValue = emailInput.value.toLowerCase();
//     let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailRegex.test(emailValue)) {
//         alert("Invalid email format!");
//         return false;
//     }

//     if (emailValue.endsWith("@example.com")) {
//         alert("Email from 'example.com' domain is not allowed!");
//         return false;
//     }

//     // Password validation
//     let passwordValue = document.getElementById("password").value;
//     let passwordCheckValue = document.getElementById("passwordCheck").value;

//     if (passwordValue.length < 12) {
//         alert("Password must be at least 12 characters long!");
//         return false;
//     }

//     if (!/[a-z]/.test(passwordValue) || !/[A-Z]/.test(passwordValue) || !/\d/.test(passwordValue) || !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(passwordValue)) {
//         alert("Password must have at least one uppercase letter, one lowercase letter, one number, and one special character!");
//         return false;
//     }

//     if (passwordValue.toLowerCase().includes("password")) {
//         alert("Password cannot contain the word 'password'!");
//         return false;
//     }

//     if (passwordValue === emailValue) {
//         alert("Password cannot be the same as the email!");
//         return false;
//     }

//     if (passwordValue !== passwordCheckValue) {
//         alert("Passwords do not match!");
//         return false;
//     }

// // Username validation
// let usernameInput = document.getElementById("username").value;
// let usernameValue = usernameInput.value.toLowerCase();

// localStorage.setItem("username", usernameValue);
//     localStorage.setItem("email", emailValue);
//     localStorage.setItem("password", passwordValue);

// emailInput.value = "";
// passwordValue.value = "";
// passwordCheckValue.value = "";
// usernameInput.value = "";

//     alert("Registration successful!");

//     return true;
// }


// new section

function validateForm() {
    // Email validation
    let emailValue = document.getElementById("email").value;

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
    localStorage.setItem("username", usernameValue);
    localStorage.setItem("email", emailValue);
    localStorage.setItem("password", passwordValue);

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("passwordCheck").value = "";
    alert("Registration successful!");

    return true;
}
// function showAlert() {
//     alert("Registration successful!");
// }
