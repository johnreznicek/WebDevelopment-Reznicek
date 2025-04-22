function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
}

// 🌈 Load theme preference
const themeSelector = document.getElementById("themeSelector");
if (themeSelector) {
  const savedTheme = localStorage.getItem("site-theme") || "blue";
  document.body.classList.add(`theme-${savedTheme}`);
  themeSelector.value = savedTheme;

  themeSelector.addEventListener("change", (e) => {
    const selected = e.target.value;
    document.body.classList.remove("theme-blue", "theme-green", "theme-pink");
    document.body.classList.add(`theme-${selected}`);
    localStorage.setItem("site-theme", selected);
  });
}

// 🌗 Load dark mode if stored (optional enhancement)
const savedDarkMode = localStorage.getItem("dark-mode");
if (savedDarkMode === "true") {
  document.body.classList.add("dark-mode");
  document.body.classList.remove("light-mode");
}

document.addEventListener("DOMContentLoaded", function () {
  // Dark mode toggle
  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      toggleDarkMode();
      localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
    });
  }

  // Collapsible content
  const coll = document.querySelector(".collapsible");
  const content = document.querySelector(".collapsible-content");
  if (coll && content) {
    coll.addEventListener("click", () => {
      coll.classList.toggle("active");
      content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
    });
  }

  // Show/hide new project form
  const showFormBtn = document.getElementById("showFormBtn");
  const projectForm = document.getElementById("projectForm");
  if (showFormBtn && projectForm) {
    showFormBtn.addEventListener("click", () => {
      projectForm.style.display = projectForm.style.display === "none" ? "block" : "none";
    });
  }

  // 🔁 Load saved projects from localStorage
  const grid = document.querySelector(".project-grid");
  const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];

  savedProjects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <h4>${project.title}</h4>
      <p>${project.desc}</p>
      <div class="tags">${project.tags.map(t => `<span>${t}</span>`).join("")}</div>
      <a href="${project.link}" target="_blank">View</a>
    `;
    grid.appendChild(card);
  });

  // ➕ Add new project
  const form = document.getElementById("newProjectForm");
  if (form && grid) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const title = document.getElementById("projTitle").value;
      const desc = document.getElementById("projDesc").value;
      const tags = document.getElementById("projTags").value.split(",").map(t => t.trim());
      const link = document.getElementById("projLink").value;

      const project = { title, desc, tags, link };
      savedProjects.push(project);
      localStorage.setItem("projects", JSON.stringify(savedProjects));

      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <h4>${title}</h4>
        <p>${desc}</p>
        <div class="tags">${tags.map(t => `<span>${t}</span>`).join("")}</div>
        <a href="${link}" target="_blank">View</a>
      `;
      grid.appendChild(card);

      form.reset();
      projectForm.style.display = "none";
    });
  }
});
