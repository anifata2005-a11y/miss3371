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
// DOB (ADVANCED CHECK)
// =====================
function validateDOB() {
    let v = document.getElementById("dob").value;
    let e = document.getElementById("errDOB");

    let dob = new Date(v);
    let today = new Date();

    let age = today.getFullYear() - dob.getFullYear();

    let ok = v && dob <= today && age <= 120;

    e.innerText = ok ? "" : "Invalid DOB (0–120 yrs, not future)";
    return ok;
}

// =====================
// ID (SSN FORMAT)
// =====================
function formatID() {
    let input = document.getElementById("idnum");
    let e = document.getElementById("errID");

    let v = input.value.replace(/\D/g, "");

    if (v.length > 3 && v.length <= 5)
        v = v.slice(0, 3) + "-" + v.slice(3);
    else if (v.length > 5)
        v = v.slice(0, 3) + "-" + v.slice(3, 5) + "-" + v.slice(5, 9);

    input.value = v;

    let ok = v.replace(/-/g, "").length === 9;
    e.innerText = ok ? "" : "Must be 9 digits";
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

    e.innerText = ok ? "" : "Invalid email format";
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
// ADDRESS
// =====================
function validateRequired(id) {
    let v = document.getElementById(id).value.trim();
    let e = document.getElementById("err" + id.charAt(0).toUpperCase() + id.slice(1));

    let ok = v.length >= 2 && v.length <= 30;

    e.innerText = ok ? "" : "2–30 characters required";
    return ok;
}

function validateOptional(id) {
    let v = document.getElementById(id).value.trim();
    let e = document.getElementById("errAddr2");

    let ok = v === "" || (v.length >= 2 && v.length <= 30);

    e.innerText = ok ? "" : "2–30 characters if entered";
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
// USER ID
// =====================
function validateUserID() {
    let v = document.getElementById("userId").value;
    let e = document.getElementById("errUser");

    let ok =
        v.length >= 5 &&
        v.length <= 20 &&
        !/^[0-9]/.test(v) &&
        /^[A-Za-z0-9_-]+$/.test(v);

    e.innerText = ok ? "" : "5–20 chars, no spaces, can't start with number";
    return ok;
}

// =====================
// PASSWORD
// =====================
function validatePassword() {
    let pw = document.getElementById("password").value;
    let uid = document.getElementById("userId").value;
    let e = document.getElementById("errPass");

    let ok =
        pw.length >= 8 &&
        /[A-Z]/.test(pw) &&
        /[a-z]/.test(pw) &&
        /[0-9]/.test(pw) &&
        pw !== uid;

    e.innerText = ok ? "" : "8+ chars, upper/lower/number, not = UserID";
    return ok;
}

// =====================
// CONFIRM PASSWORD
// =====================
function matchPassword() {
    let pw = document.getElementById("password").value;
    let cpw = document.getElementById("confirmPassword").value;
    let e = document.getElementById("errPass");

    let ok = pw === cpw;

    e.innerText = ok ? "" : "Passwords do not match";
    return ok;
}

// =====================
// SLIDER
// =====================
function updateHealth(val) {
    let text = "Moderate Health";

    if (val < 30) text = "Poor";
    else if (val > 70) text = "Excellent";

    document.getElementById("healthOutput").innerText =
        val + " (" + text + ")";
}

// =====================
// MASTER VALIDATE
// =====================
function validateAll() {
    let ok = true;

    if (!validateName("firstName", "errFirst")) ok = false;
    if (!validateMI()) ok = false;
    if (!validateName("lastName", "errLast")) ok = false;
    if (!validateDOB()) ok = false;
    if (!formatID()) ok = false;
    if (!validateEmail()) ok = false;
    if (!validatePhone()) ok = false;
    if (!validateRequired("addr1")) ok = false;
    if (!validateOptional("addr2")) ok = false;
    if (!validateRequired("city")) ok = false;
    if (!validateState()) ok = false;
    if (!validateZip()) ok = false;
    if (!validateUserID()) ok = false;
    if (!validatePassword()) ok = false;
    if (!matchPassword()) ok = false;

    // SHOW submit only if valid
    document.getElementById("submitBtn").style.display =
        ok ? "inline" : "none";

    alert(ok ? "All good! You can submit." : "Fix errors first.");

    return ok;
}

// =====================
// THANK YOU PAGE
// =====================
function goToThankYou() {
    window.location.href = "thankyou.html";
}
