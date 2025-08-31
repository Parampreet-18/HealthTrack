// 

// Validate all forms before submit
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", function(event) {
    if (!this.checkValidity()) {
      event.preventDefault(); // stop submit
      this.reportValidity();  // show validation messages
    }
  });
});

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const toggleLoginBtn = document.getElementById('toggleLogin');
const signInBtn = document.getElementById('signIn');

// Toggle panels
registerBtn.addEventListener('click', () => {
  container.classList.add("active");
});

toggleLoginBtn.addEventListener('click', () => {
  container.classList.remove("active");
});

// Sign In validation + redirect
signInBtn.addEventListener('click', (e) => {
  const form = signInBtn.closest("form"); // get sign-in form

  if (form.checkValidity()) {
    // ✅ Valid → go to user.html
    window.location.href = "Trainer.html";
  } else {
    // ❌ Invalid → prevent redirect and show errors
    e.preventDefault();
    form.reportValidity();
  }
});
