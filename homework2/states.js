// List of all 50 states + DC + Puerto Rico
const states = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
  "DC", "PR"
];

// Function to load states into dropdown
function loadStates() {
  const select = document.getElementById("state");

  if (!select) return;

  // keep default blank option
  states.forEach(state => {
    let option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    select.appendChild(option);
  });
}

// Run automatically when page loads
window.onload = function () {
  loadStates();
};
