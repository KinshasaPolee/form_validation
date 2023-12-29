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