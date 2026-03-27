/*
Program name: script.js
Author: Minatu Anifata
Date created: Feb 23, 2026
Version: 1.2
Description: Validation + Review logic for We Care Medical Clinic form
*/

// -------------------------------
// Populate budget display
// -------------------------------
window.addEventListener("DOMContentLoaded", function () {

    const budget = document.getElementById("budget");
    const budgetValue = document.getElementById("budgetValue");

    if (budget) {
        budget.addEventListener("input", function () {
            budgetValue.textContent = "$" + Number(budget.value).toLocaleString();
        });
    }

    // Load states from states.js if function exists
    if (typeof populateStates === "function") {
        populateStates();
    }
});


// -------------------------------
// REVIEW FUNCTION
// -------------------------------
function reviewForm() {

    const reviewArea = document.getElementById("reviewArea");

    const firstName = document.getElementById("firstName").value;
    const middleInitial = document.getElementById("middleInitial").value;
    const lastName = document.getElementById("lastName").value;

    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const address1 = document.getElementById("address1").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const zip = document.getElementById("zip").value;

    const budget = document.getElementById("budget").value;

    const userId = document.getElementById("userId").value;

    reviewArea.innerHTML = `
        <h2>Review Your Information</h2>
        <p><strong>Name:</strong> ${firstName} ${middleInitial} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address1}, ${city}, ${state} ${zip}</p>
        <p><strong>Budget:</strong> $${Number(budget).toLocaleString()}</p>
        <p><strong>User ID:</strong> ${userId}</p>
    `;
}


// -------------------------------
// FORM VALIDATION
// -------------------------------
function validateForm() {

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const userId = document.getElementById("userId").value;

    // -----------------------
    // Password match check
    // -----------------------
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    // -----------------------
    // Password strength check
    // -----------------------
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    // -----------------------
    // User ID validation
    // Must start with letter, 5–30 chars
    // -----------------------
    const userIdPattern = /^[A-Za-z][A-Za-z0-9_-]{4,29}$/;

    if (!userIdPattern.test(userId)) {
        alert("User ID must start with a letter and be 5–30 characters long.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}


// -------------------------------
// RESET HANDLING (optional cleanup)
// -------------------------------
document.getElementById("mainForm")?.addEventListener("reset", function () {

    document.getElementById("reviewArea").innerHTML =
        "<h2>Review Section</h2><p>Click Review to see your info.</p>";

    document.getElementById("budgetValue").textContent = "$50,000";
});
