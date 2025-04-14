function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  
  document.addEventListener("DOMContentLoaded", function () {
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
  