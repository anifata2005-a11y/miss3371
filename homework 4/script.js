// =====================
// COOKIE SYSTEM
// =====================
function setCookie(name, value, hours) {
    let d = new Date();
    d.setTime(d.getTime() + (hours * 60 * 60 * 1000));
    document.cookie = name + "=" + value + ";expires=" + d.toUTCString() + ";path=/";
}

function getCookie(name) {
    return document.cookie.split("; ").find(row => row.startsWith(name + "="))?.split("=")[1];
}

function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// =====================
// WELCOME MESSAGE
// =====================
function loadUser() {
    let name = getCookie("firstName");
    let welcome = document.getElementById("welcome");

    if (name) {
        welcome.innerHTML = "Welcome back, " + name +
        " <br><a href='#' onclick='newUser()'>Not you?</a>";

        document.getElementById("firstName").value = name;
    } else {
        welcome.innerText = "Welcome New User";
    }
}

// =====================
// RESET USER
// =====================
function newUser() {
    deleteCookie("firstName");
    localStorage.clear();
    location.reload();
}

// =====================
// SAVE COOKIE
// =====================
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("firstName").addEventListener("blur", function () {
        if (document.getElementById("remember").checked) {
            setCookie("firstName", this.value, 48);
        }
    });
});

// =====================
// LOCAL STORAGE
// =====================
function saveFormData() {
    localStorage.setItem("email", email.value);
    localStorage.setItem("phone", phone.value);
    localStorage.setItem("city", city.value);
    localStorage.setItem("addr1", addr1.value);
    localStorage.setItem("zip", zip.value);
}

function loadFormData() {
    email.value = localStorage.getItem("email") || "";
    phone.value = localStorage.getItem("phone") || "";
    city.value = localStorage.getItem("city") || "";
    addr1.value = localStorage.getItem("addr1") || "";
    zip.value = localStorage.getItem("zip") || "";
}

// =====================
// FETCH STATES
// =====================
async function loadStates() {
    try {
        let res = await fetch("./states.txt");
        let data = await res.text();

        let states = data.split(",");
        let dropdown = document.getElementById("state");

        states.forEach(s => {
            let opt = document.createElement("option");
            opt.textContent = s.trim();
            opt.value = s.trim();
            dropdown.appendChild(opt);
        });

    } catch (e) {
        console.log(e);
    }
}

// =====================
// VALIDATION + SUBMIT
// =====================
function validateAll() {

    let valid = true;

    if (valid) {
        window.location.href = "thankyou.html";
    }

    return false;
}

// =====================
// INIT
// =====================
window.onload = function () {
    loadUser();
    loadFormData();
    loadStates();
};
