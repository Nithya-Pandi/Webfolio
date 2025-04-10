// === Dark Mode Toggle ===
const modeToggle = document.getElementById("mode-toggle");

if (modeToggle) {
  modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Swap emoji icon
    modeToggle.textContent = document.body.classList.contains("dark-mode")
      ? "☀️"
      : "🌙";
  });
}

// === Contact Form - Success Message ===
const form = document.getElementById("contact-form");
const statusMsg = document.getElementById("form-status");

if (form && statusMsg) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    statusMsg.textContent = "Message sent successfully!";
    statusMsg.classList.add("active");

    setTimeout(() => {
      statusMsg.classList.remove("active");
    }, 3000);

    form.reset();
  });
}
