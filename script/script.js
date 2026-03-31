const form = document.getElementById("emailForm");
const emailField = document.getElementById("email");
const errorMessage = document.getElementById("errorMessage");
const submmitBtn = document.getElementById("submit-btn");

let isValid = true;

// remove error class on focus
emailField.addEventListener("focus", () => {
  emailField.classList.remove("incorrect");
  errorMessage.textContent = "";
});

// Check email validity when form is submitted
form.addEventListener("submit", (e) => {
  if (checkEmail(isValid) === false) {
    e.preventDefault();
} 
// e.preventDefault();

});




// Function to check email Input
function checkEmail(isValid) {
    const email = emailField.value.trim();

    //save email to sessionStorage
    sessionStorage.setItem("Email", email);

  if (email === "" || email === null) {
    emailField.classList.add("incorrect");
    errorMessage.textContent = "Email is required!";
    isValid = false;
  } else if (!validateEmail(email)) {
    emailField.classList.add("incorrect");
    errorMessage.textContent = "Valid email required!";
    isValid = false;
  }
  return isValid;
}

// Function to validate email
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
