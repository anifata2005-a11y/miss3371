function validateFirstName() {
    let value = document.getElementById("firstName").value;
    let error = document.getElementById("firstNameError");

    let regex = /^[A-Za-z'-]{1,30}$/;

    if (!regex.test(value)) {
        error.textContent = "Invalid first name";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validateLastName() {
    let value = document.getElementById("lastName").value;
    let error = document.getElementById("lastNameError");

    let regex = /^[A-Za-z'-]{1,30}$/;

    if (!regex.test(value)) {
        error.textContent = "Invalid last name";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validateEmail() {
    let value = document.getElementById("email").value.toLowerCase();
    let error = document.getElementById("emailError");

    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(value)) {
        error.textContent = "Invalid email";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validatePassword() {
    let value = document.getElementById("password").value;
    let error = document.getElementById("passwordError");

    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!regex.test(value)) {
        error.textContent = "Min 8 chars, 1 upper, 1 lower, 1 number";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validateConfirmPassword() {
    let pw = document.getElementById("password").value;
    let confirm = document.getElementById("confirmPassword").value;
    let error = document.getElementById("confirmError");

    if (pw !== confirm) {
        error.textContent = "Passwords do not match";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function updateSalary() {
    let value = document.getElementById("salary").value;
    document.getElementById("salaryValue").textContent = "$" + value;
}

function validateForm() {
    let valid = true;

    if (!validateFirstName()) valid = false;
    if (!validateLastName()) valid = false;
    if (!validateEmail()) valid = false;
    if (!validatePassword()) valid = false;
    if (!validateConfirmPassword()) valid = false;

    if (valid) {
        document.getElementById("submitBtn").style.display = "block";
    } else {
        alert("Fix errors before submitting");
    }
}

function submitForm() {
    window.location.href = "thankyou.html";
}

