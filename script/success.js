const email = sessionStorage.getItem("Email");
const checkedEmail = document.getElementById("checkedEmail");
const submitBtn = document.getElementById("submit-btn");

checkedEmail.textContent = email;

// Clear sessionStorage on button click
submitBtn.addEventListener("click", () => {
  sessionStorage.clear("Email");
});
