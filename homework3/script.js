// FIRST NAME
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

// LAST NAME
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

// EMAIL
function validateEmail() {
    let field = document.getElementById("email");
    let value = field.value.toLowerCase();
    field.value = value;

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

// USER ID (REQUIRED)
function validateUserId() {
    let value = document.getElementById("userId").value;
    let error = document.getElementById("userIdError");

    if (/^[0-9]/.test(value)) {
        error.textContent = "Cannot start with number";
        return false;
    } else if (value.length < 5 || value.length > 20) {
        error.textContent = "5–20 characters required";
        return false;
    } else if (!/^[A-Za-z0-9_-]+$/.test(value)) {
        error.textContent = "Only letters, numbers, - _ allowed";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

// PASSWORD
function validatePassword() {
    let value = document.getElementById("password").value;
    let userId = document.getElementById("userId").value;
    let error = document.getElementById("passwordError");

    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!regex.test(value)) {
        error.textContent = "Min 8 chars, 1 upper, 1 lower, 1 number";
        return false;
    } else if (value === userId) {
        error.textContent = "Cannot match User ID";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

// CONFIRM PASSWORD
function validateConfirmPassword() {
    let pw = document.getElementById("password").value;
    let confirm = document.getElementById("confirmPassword").value;
    let error = document.getElementById("confirmPasswordError");

    if (pw !== confirm) {
        error.textContent = "Passwords do not match";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

// SLIDER (if you still use it)
function updateSalary() {
    let value = document.getElementById("salary").value;
    document.getElementById("salaryValue").textContent = "$" + value;
}

// MAIN VALIDATE
function validateForm() {
    let valid = true;

    if (!validateFirstName()) valid = false;
    if (!validateLastName()) valid = false;
    if (!validateEmail()) valid = false;
    if (!validateUserId()) valid = false;
    if (!validatePassword()) valid = false;
    if (!validateConfirmPassword()) valid = false;

    document.getElementById("submitBtn").disabled = !valid;

    if (valid) {
        alert("All fields valid! You can submit.");
    } else {
        alert("Fix errors before submitting");
    }
}

// OPTIONAL submit redirect (if you use button instead of form action)
function submitForm() {
    window.location.href = "thankyou.html";
}
