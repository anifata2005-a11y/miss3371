window.addEventListener("DOMContentLoaded", function () {

    document.getElementById("currentDate").textContent =
        new Date().toLocaleDateString();

    const budget = document.getElementById("budget");
    const budgetValue = document.getElementById("budgetValue");

    budget.addEventListener("input", function () {
        budgetValue.textContent = "$" + budget.value;
    });
});


// ================= REVIEW =================
function reviewForm() {

    const data = `
    <h3>Review Info</h3>
    <p>Name: ${firstName.value} ${lastName.value}</p>
    <p>Email: ${email.value}</p>
    <p>Phone: ${phone.value}</p>
    <p>City: ${city.value}</p>
    <p>State: ${state.value}</p>
    `;

    document.getElementById("reviewArea").innerHTML = data;
}


// ================= VALIDATION =================
function validateForm() {

    let valid = true;

    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const pass = document.getElementById("password");
    const confirm = document.getElementById("confirmPassword");
    const dob = document.getElementById("dob");

    // PASSWORD MATCH
    if (pass.value !== confirm.value) {
        document.getElementById("confirmErr").innerText = "Passwords do not match";
        valid = false;
    }

    // EMAIL
    if (!email.value.includes("@")) {
        document.getElementById("emailErr").innerText = "Invalid email";
        valid = false;
    }

    // PHONE
    if (phone.value && !phone.value.match(/\d{3}-\d{3}-\d{4}/)) {
        document.getElementById("phoneErr").innerText = "Format 123-456-7890";
        valid = false;
    }

    // DOB RANGE CHECK (18+ simple check)
    let birth = new Date(dob.value);
    let age = new Date().getFullYear() - birth.getFullYear();
    if (age < 0 || age > 120) {
        document.getElementById("dobErr").innerText = "Invalid date";
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");
    }

    return valid;
}
