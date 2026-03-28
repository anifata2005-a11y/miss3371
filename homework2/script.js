function updateHealth(val) {
    let label = "";

    if (val < 30) label = "Poor Health";
    else if (val < 60) label = "Moderate Health";
    else if (val < 80) label = "Good Health";
    else label = "Excellent Health";

    document.getElementById("healthOutput").innerText =
        val + " (" + label + ")";
}

function fixUserId() {
    userId.value = userId.value.toLowerCase();
}

function passwordCheck() {
    let pass = password.value;

    let valid =
        /[A-Z]/.test(pass) &&
        /[a-z]/.test(pass) &&
        /\d/.test(pass) &&
        /[!@#%^&*()_\-+=\/<>.,`~]/.test(pass) &&
        pass.length >= 8 &&
        pass.length >= 30;

    errPass.innerText = valid ? "" : "Weak password";
}

function validateAll() {
    let ok = true;

    if (password.value !== confirmPassword.value) {
        errPass.innerText = "Passwords do not match";
        ok = false;
    }

    return ok;
}

function validateDOB() {
    let dob = new Date(document.getElementById("dob").value);
    let today = new Date();
    let min = new Date();
    min.setFullYear(today.getFullYear() - 120);

    if (dob > today) return "ERROR: Future date";
    if (dob < min) return "ERROR: Too old";
    return "PASS";
}


// WORD LIMIT (ADDRESS)
function checkAddress() {
    let text = document.getElementById("address").value.trim();
    let words = text === "" ? 0 : text.split(/\s+/).length;

    if (words > 30) {
        document.getElementById("errAddress").innerText = "Max 30 words allowed";
        return false;
    } else {
        document.getElementById("errAddress").innerText = "";
        return true;
    }
}

function reviewForm() {

    reviewTable.innerHTML = `
<tr><td>Name</td><td>${firstName.value} ${mi.value} ${lastName.value}</td><td>PASS</td></tr>

<tr><td>DOB</td><td>${dob.value}</td><td>${validateDOB()}</td></tr>

<tr><td>Email</td><td>${email.value}</td><td>${email.value.includes("@") ? "PASS" : "ERROR"}</td></tr>

<tr><td>Phone</td><td>${phone.value}</td><td>${/^\d{3}-\d{3}-\d{4}$/.test(phone.value) ? "PASS" : "ERROR"}</td></tr>

<tr><td>Address</td><td>${addr1.value}, ${city.value}, ${state.value} ${zip.value}</td><td>PASS</td></tr>

<tr><td>Health Score</td><td>${healthOutput.innerText}</td><td>PASS</td></tr>

<tr><td>User ID</td><td>${userId.value}</td><td>PASS</td></tr>

<tr><td>Password</td><td>****</td><td>${password.value === confirmPassword.value ? "PASS" : "ERROR"}</td></tr>
`;
}
