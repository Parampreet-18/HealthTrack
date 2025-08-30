  const modal = document.getElementById("loginModal");
    const loginBtn = document.getElementById("loginBtn");
    const closeBtn = document.querySelector(".close");

    // Open modal
    loginBtn.onclick = () => {
      modal.style.display = "flex";
    };

    // Close modal
    closeBtn.onclick = () => {
      modal.style.display = "none";
    };

    // Close when clicking outside
    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };