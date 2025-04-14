function toggleDarkMode() {
  const body = document.body;
  const isDark = body.classList.contains("dark-mode");
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
}

// Init button events on page load
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", toggleDarkMode);
  }

  const coll = document.querySelector(".collapsible");
  const content = document.querySelector(".collapsible-content");

  if (coll && content) {
    coll.addEventListener("click", () => {
      coll.classList.toggle("active");
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
});