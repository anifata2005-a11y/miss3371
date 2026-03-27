/*
We Care Medical Clinic JavaScript
Handles validation, review, and dynamic features
*/

window.addEventListener("DOMContentLoaded", function () {

    // ---------------- DATE ----------------
    const date = new Date();
    document.getElementById("currentDate").textContent =
        "Today: " + date.toLocaleDateString();

    // ---------------- STATES ----------------
    if (typeof populateStates === "function") {
        populateStates();
    }

    // ---------------- SLIDER ----------------
    const budget = document.getElementById("budget");
    const budgetValue = document.getElementById("budgetValue");

    budget.addEventListener("input", function () {
        budgetValue.textContent = "$" + Number(budget.value).toLocaleString();
    });
});


// ================= REVIEW =================
function reviewForm() {

    const fields = [
        "firstName", "middleInitial", "lastName",
        "dob", "email", "phone",
        "address", "city", "state", "zip",
        "userId"
    ];

    let output = "<h2>Review Information</h2>";

    fields.forEach(id => {
        let value = document.getElementById(id).value;
        output += `<p><strong>${id}:</strong> ${value}</p>`;
    });

    document.getElementById("reviewArea").innerHTML = output;
}


// ================= VALIDATION =================
function validateForm() {

    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;

    if (password !== confirm) {
        alert("Passwords do not match!");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
