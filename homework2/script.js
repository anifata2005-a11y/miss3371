// SLIDER LIVE UPDATE
document.getElementById("salary").addEventListener("input", function () {
  document.getElementById("salaryVal").innerText = this.value;
});


// REVIEW BUTTON
function reviewForm() {

  let first = document.getElementById("firstName").value;
  let middle = document.getElementById("middleInitial").value;
  let last = document.getElementById("lastName").value;

  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  let address = document.getElementById("address1").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
  let zip = document.getElementById("zip").value;

  let salary = document.getElementById("salary").value;

  let symptoms = document.getElementById("symptoms").value;

  let userId = document.getElementById("userId").value.toLowerCase();

  let pw1 = document.getElementById("pw1").value;


  document.getElementById("reviewBox").innerHTML = `
    <h2>PLEASE REVIEW THIS INFORMATION</h2>

    Name: ${first} ${middle} ${last}<br>
    Email: ${email}<br>
    Phone: ${phone}<br><br>

    Address:<br>
    ${address}, ${city}, ${state} ${zip}<br><br>

    Salary: $${salary}<br><br>

    Symptoms: ${symptoms}<br><br>

    User ID: ${userId}<br>
    Password: ${pw1}
  `;
}


// PASSWORD VALIDATION

function validateForm() {

  let userId = document.getElementById("userId").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  let firstName = document.getElementById("firstName").value.toLowerCase();
  let lastName = document.getElementById("lastName").value.toLowerCase();

  // ✅ CONVERT USER ID TO LOWERCASE
  userId = userId.toLowerCase();
  document.getElementById("userId").value = userId;


  // ❌ PASSWORDS MUST MATCH
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  }


  // ❌ PASSWORD LENGTH
  if (password.length < 8 || password.length > 30) {
    alert("Password must be 8–30 characters");
    return false;
  }


  // ❌ PASSWORD MUST CONTAIN REQUIRED TYPES
  let pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#%^&*()_\-+=<>.,`~\/]).+$/;

  if (!pattern.test(password)) {
    alert("Password must include uppercase, lowercase, number, special character");
    return false;
  }


  // ❌ NO QUOTES ALLOWED
  if (password.includes('"') || password.includes("'")) {
    alert("Password cannot contain quotes");
    return false;
  }


  // ❌ PASSWORD CANNOT BE USER ID
  if (password.toLowerCase() === userId) {
    alert("Password cannot be the same as User ID");
    return false;
  }


  // ❌ PASSWORD CANNOT CONTAIN NAME
  if (
    password.toLowerCase().includes(firstName) ||
    password.toLowerCase().includes(lastName)
  ) {
    alert("Password cannot contain your name");
    return false;
  }

  return true;
}


// SUBMIT CHECK
document.getElementById("regForm").addEventListener("submit", function (e) {
  if (!validatePassword()) {
    e.preventDefault();
  }
});
