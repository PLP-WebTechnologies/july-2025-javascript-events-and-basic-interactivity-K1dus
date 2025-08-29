// ====================
// Part 1: Event Handling
// ====================

// Click event
const clickBtn = document.getElementById("clickBtn");
const clickMsg = document.getElementById("clickMsg");

clickBtn.addEventListener("click", () => {
  clickMsg.textContent = "Button was clicked!";
});

// Hover event
function hoverMsg(el) {
  el.textContent = "You hovered over the text!";
}

// ====================
// Part 2: Interactive Features
// ====================

// Dark/Light Mode Toggle
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

// Counter Feature
let counter = 0;
const counterValue = document.getElementById("counterValue");
document.getElementById("increment").addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});
document.getElementById("decrement").addEventListener("click", () => {
  counter--;
  counterValue.textContent = counter;
});

// ====================
// Part 3: Custom Form Validation
// ====================
const form = document.getElementById("signupForm");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formMsg").textContent = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let valid = true;

  // Name validation
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    valid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    valid = false;
  }

  // Password validation
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  // Success message
  if (valid) {
    document.getElementById("formMsg").textContent = "Form submitted successfully!";
    form.reset();
  }
});
