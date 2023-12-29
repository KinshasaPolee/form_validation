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

    return true;
}
