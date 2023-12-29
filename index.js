document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration");
    const loginForm = document.getElementById("login");
    const errorDisplay = document.getElementById("errorDisplay");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();
        errorDisplay.innerHTML = "";

        // const username = registrationForm.username.value.trim().toLowerCase();
        // if (username === "" || username.length < 4 || !hasTwoUniqueChars(username) || hasSpecialChars(username)) {
        //     displayError("Invalid username.");
        //     return;
        // }
        // email validation
        function validateForm() {
            var emailValue = document.getElementById("email").value;
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailValue)) {
                alert("Invalid email format!");
                return false;
            }
            if (emailValue.endsWith("@example.com")) {
                alert("Email from 'example.com' domain is not allowed!");
                return false;
            }
            return true;
        }
        // const email = registrationForm.email.value.trim().toLowerCase();
        // if (!isValidEmail(email) || email.endsWith("@example.com")) {
        //     displayError("Invalid email.");
        //     return;
        // }

    //     const password = registrationForm.password.value;
    //     const passwordCheck = registrationForm.passwordCheck.value;
    //     if (!isValidPassword(password) || password !== passwordCheck) {
    //         displayError("Invalid password.");
    //         return;
    //     }

    //     if (!registrationForm.terms.checked) {
    //         displayError("You must accept the Terms of Use.");
    //         return;
    //     }

    //     const userData = { username, email, password };
    //     storeUserData(userData);

    //     registrationForm.reset();

    //     displaySuccess("Registration successful!");
    // });

    // loginForm.addEventListener("submit", function (event) {
    //     event.preventDefault();
    //     errorDisplay.innerHTML = "";

    //     const username = loginForm.username.value.trim().toLowerCase();
    //     if (username === "" || !userExists(username)) {
    //         displayError("Invalid username.");
    //         return;
    //     }

    //     const password = loginForm.password.value;
    //     const storedPassword = getUserData(username).password;
    //     if (password !== storedPassword) {
    //         displayError("Incorrect password.");
    //         return;
    //     }

    //     loginForm.reset();

    //     const successMessage = "Login successful!";
    //     if (loginForm.persist.checked) {
    //         displaySuccess(successMessage + " (Keep me logged in)");
    //     } else {
    //         displaySuccess(successMessage);
    //     }
    // });

    // function displayError(message) {
    //     errorDisplay.innerHTML = `<div class="error">${message}</div>`;
    // }

    // function displaySuccess(message) {
    //     errorDisplay.innerHTML = `<div class="success">${message}</div>`;
    // }

    // function hasTwoUniqueChars(str) {
    //     const uniqueChars = new Set(str);
    //     return uniqueChars.size >= 2;
    // }

    // function hasSpecialChars(str) {
    //     const regex = /[!@#$%^&*(),.?":{}|<>]/;
    //     return regex.test(str);
    // }

    // function isValidEmail(email) {
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return emailRegex.test(email);
    // }

    // function isValidPassword(password) {
    //     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{12,}$/;
    //     return passwordRegex.test(password) && !password.toLowerCase().includes("password");
    // }

//     function storeUserData(userData) {
//         const users = JSON.parse(localStorage.getItem("users")) || [];
//         users.push(userData);
//         localStorage.setItem("users", JSON.stringify(users));
//     }

//     function userExists(username) {
//         const users = JSON.parse(localStorage.getItem("users")) || [];
//         return users.some(user => user.username === username);
//     }

//     function getUserData(username) {
//         const users = JSON.parse(localStorage.getItem("users")) || [];
//         return users.find(user => user.username === username);
//     }
// });