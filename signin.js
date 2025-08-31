// const container = document.getElementById('container');
// const registerBtn = document.getElementById('register');
// const loginBtn = document.getElementById('login');
// const signInBtn = document.getElementById('signIn');

// registerBtn.addEventListener('click', () => {
//     container.classList.add("active");
// });

// loginBtn.addEventListener('click', () => {
//     container.classList.remove("active");
// });

// signInBtn.addEventListener('click', (e) => {
//     e.preventDefault(); // 👈 This stops the form from submitting
//     window.location.href = 'index.html'; // 👈 Redirects to index.html
// });



//   document.getElementById("login").addEventListener("click", function() {
//     window.location.href = "s.html"; // put your page name here
//   });



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
    window.location.href = "User.html"; // redirect to your specific page
});

