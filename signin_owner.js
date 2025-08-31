const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const toggleLoginBtn = document.getElementById('toggleLogin'); // renamed
const signInBtn = document.getElementById('signIn');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

toggleLoginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

signInBtn.addEventListener('click', (e) => {
    e.preventDefault(); // stops form from submitting
    window.location.href = "owner.html"; // redirect to your specific page
});
