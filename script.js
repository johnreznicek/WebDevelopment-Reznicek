function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
}

document.addEventListener("DOMContentLoaded", function () {
  // Dark mode toggle
  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", toggleDarkMode);
  }

  // Collapsible section
  const coll = document.querySelector(".collapsible");
  const content = document.querySelector(".collapsible-content");
  if (coll && content) {
    coll.addEventListener("click", () => {
      coll.classList.toggle("active");
      content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
    });
  }

  // Show/hide form
  const showFormBtn = document.getElementById("showFormBtn");
  const projectForm = document.getElementById("projectForm");
  if (showFormBtn && projectForm) {
    showFormBtn.addEventListener("click", () => {
      projectForm.style.display = projectForm.style.display === "none" ? "block" : "none";
    });
  }

  // New project form logic
  const form = document.getElementById("newProjectForm");
  const grid = document.querySelector(".project-grid");
  if (form && grid) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const title = document.getElementById("projTitle").value;
      const desc = document.getElementById("projDesc").value;
      const tags = document.getElementById("projTags").value.split(",");
      const link = document.getElementById("projLink").value;

      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <h4>${title}</h4>
        <p>${desc}</p>
        <div class="tags">
          ${tags.map(t => `<span>${t.trim()}</span>`).join("")}
        </div>
        <a href="${link}" target="_blank">View</a>
      `;
      grid.appendChild(card);

      form.reset();
      projectForm.style.display = "none";
    });
  }
});
