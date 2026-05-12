// =====================
// FETCH STATES (HOMEWORK 4)
// =====================
async function loadStates() {
    try {
        const response = await fetch("states.txt");

        if (!response.ok) {
            throw new Error("Could not load states file");
        }

        const data = await response.text();
        const states = data.split("\n");

        const stateSelect = document.getElementById("state");

        states.forEach(state => {
            if (state.trim() !== "") {
                let option = document.createElement("option");
                option.value = state.trim();
                option.textContent = state.trim();
                stateSelect.appendChild(option);
            }
        });

    } catch (error) {
        console.log("Fetch Error:", error);
    }
}

// Run fetch when page loads
window.addEventListener("load", loadStates);


// =====================
// NAME VALIDATION
// =====================
function validateName(id, errId) {
    let v = document.getElementById(id).value;
    let e = document.getElementById(errId);

    let ok = /^[A-Za-z'-]{1,30}$/.test(v);

    e.innerText = ok ? "" : "1–30 letters, apostrophes, dashes only";
    return ok;
}

// =====================
// MIDDLE INITIAL
// =====================
function validateMI() {
    let v = document.getElementById("mi").value;
    let e = document.getElementById("errMI");

    let ok = v === "" || /^[A-Za-z]$/.test(v);

    e.innerText = ok ? "" : "Single letter only";
    return ok;
}

// =====================
// DOB
// =====================
function validateDOB() {
    let v = document.getElementById("dob").value;
    let e = document.getElementById("errDOB");

    let dob = new Date(v);
    let today = new Date();

    let age = today.getFullYear() - dob.getFullYear();

    let ok = v && dob <= today && age <= 120;

    e.innerText = ok ? "" : "Invalid DOB (0–120 yrs)";
    return ok;
}

// =====================
// STATE
// =====================
function validateState() {
    let v = document.getElementById("state").value;
    let e = document.getElementById("errState");

    let ok = v !== "";

    e.innerText = ok ? "" : "Select a state";
    return ok;
}

// =====================
// EMAIL
// =====================
function validateEmail() {
    let input = document.getElementById("email");
    let e = document.getElementById("errEmail");

    input.value = input.value.toLowerCase();

    let ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);

    e.innerText = ok ? "" : "Invalid email";
    return ok;
}

// =====================
// PHONE
// =====================
function validatePhone() {
    let v = document.getElementById("phone").value;
    let e = document.getElementById("errPhone");

    let ok = /^\d{3}-\d{3}-\d{4}$/.test(v);

    e.innerText = ok ? "" : "Format: 123-456-7890";
    return ok;
}

// =====================
// ZIP
// =====================
function validateZip() {
    let v = document.getElementById("zip").value;
    let e = document.getElementById("errZip");

    let ok = /^\d{5}$/.test(v);

    e.innerText = ok ? "" : "5 digits only";
    return ok;
}

// =====================
// MASTER VALIDATION
// =====================
function validateAll() {

    let ok = true;

    if (!validateName("firstName", "errFirst")) ok = false;
    if (!validateMI()) ok = false;
    if (!validateName("lastName", "errLast")) ok = false;
    if (!validateDOB()) ok = false;
    if (!validateEmail()) ok = false;
    if (!validatePhone()) ok = false;
    if (!validateState()) ok = false;
    if (!validateZip()) ok = false;

    alert(ok ? "Form is valid!" : "Please fix errors.");

    return ok;
}

// =====================
// THANK YOU PAGE
// =====================
function goToThankYou() {
    window.location.href = "thankyou.html";
}
