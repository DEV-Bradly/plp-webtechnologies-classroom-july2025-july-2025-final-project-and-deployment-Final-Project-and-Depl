// Mobile nav toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".navbar ul");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    const icon = menuToggle.querySelector("i");
    icon.classList.toggle("bx-x");
    icon.classList.toggle("bx-menu");
  });
}

// Contact form validation (only runs on contact.html)
const form = document.getElementById("contactForm");
if (form) {
  const msgBox = document.getElementById("form-msg");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
      msgBox.textContent = "Please fill in all fields.";
      msgBox.style.color = "#ffcc00";
      return;
    }
    const emailRE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRE.test(email)) {
      msgBox.textContent = "Please enter a valid email.";
      msgBox.style.color = "#ffcc00";
      return;
    }
    msgBox.style.color = "#7cf03d";
    msgBox.textContent = "Message sent! I will get back to you soon.";
    form.reset();
    setTimeout(() => { msgBox.textContent = ""; }, 4000);
  });
}
