function showDate() {
    document.getElementById("currentDate").innerText =
        new Date().toDateString();
}

function showSlider(val) {
    document.getElementById("sliderValue").innerText = val;
}

/* NAME */
function validateFirstName() {
    let v = document.getElementById("firstName").value;
    let e = document.getElementById("firstNameError");
    let ok = /^[A-Za-z'-]{1,30}$/.test(v);

    e.innerText = ok ? "" : "Invalid first name";
    return ok;
}

function validateLastName() {
    let v = document.getElementById("lastName").value;
    let e = document.getElementById("lastNameError");
    let ok = /^[A-Za-z'-]{1,30}$/.test(v);

    e.innerText = ok ? "" : "Invalid last name";
    return ok;
}

/* EMAIL */
function validateEmail() {
    let v = document.getElementById("email");
    v.value = v.value.toLowerCase();

    let e = document.getElementById("emailError");
    let ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.value);

    e.innerText = ok ? "" : "Invalid email";
    return ok;
}

/* USER ID */
function validateUserId() {
    let v = document.getElementById("userId").value;
    let e = document.getElementById("userIdError");

    let ok =
        v.length >= 5 &&
        v.length <= 20 &&
        !/^[0-9]/.test(v) &&
        /^[A-Za-z0-9_-]+$/.test(v);

    e.innerText = ok ? "" : "Invalid User ID";
    return ok;
}

/* PASSWORD */
function validatePassword() {
    let pw = document.getElementById("password").value;
    let uid = document.getElementById("userId").value;
    let e = document.getElementById("passwordError");

    let ok =
        pw.length >= 8 &&
        /[A-Z]/.test(pw) &&
        /[a-z]/.test(pw) &&
        /[0-9]/.test(pw) &&
        pw !== uid;

    e.innerText = ok ? "" : "Weak password";
    return ok;
}

/* CONFIRM */
function validateConfirmPassword() {
    let pw = document.getElementById("password").value;
    let cpw = document.getElementById("confirmPassword").value;
    let e = document.getElementById("confirmError");

    let ok = pw === cpw;

    e.innerText = ok ? "" : "Passwords do not match";
    return ok;
}

/* MASTER VALIDATE */
function validateForm() {
    let ok =
        validateFirstName() &
        validateLastName() &
        validateEmail() &
        validateUserId() &
        validatePassword() &
        validateConfirmPassword();

    document.getElementById("submitBtn").disabled = !ok;

    if (ok) alert("Ready to submit!");
}

/* REVIEW BUTTON */
function reviewForm() {
    let table = document.getElementById("reviewTable");

    table.innerHTML = `
<tr><td>Name</td><td>${firstName.value} ${lastName.value}</td><td>✔</td></tr>
<tr><td>Email</td><td>${email.value}</td><td>✔</td></tr>
<tr><td>User ID</td><td>${userId.value}</td><td>✔</td></tr>
<tr><td>Health</td><td>${sliderValue.innerText}</td><td>✔</td></tr>
<tr><td>Password</td><td>••••••</td><td>${password.value === confirmPassword.value ? "✔" : "⚠"}</td></tr>
`;
}
