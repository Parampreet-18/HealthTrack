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
signInBtn.addEventListener('click', () => {
  const form = signInBtn.closest("form"); // get sign-in form

  if (form.checkValidity()) {
    // ✅ Valid → redirect
    window.location.href = "user.html";
  } else {
    // ❌ Invalid → show errors
    form.reportValidity();
  }
});
