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
function validatePassword() {

  let pw1 = document.getElementById("pw1").value;
  let pw2 = document.getElementById("pw2").value;

  let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>]).{8,30}$/;

  if (pw1 !== pw2) {
    alert("Passwords do not match");
    return false;
  }

  if (!pattern.test(pw1)) {
    alert("Invalid password format");
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
