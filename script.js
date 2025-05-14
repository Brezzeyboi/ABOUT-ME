// script.js
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleProjects');
  const section = document.getElementById('projectsSection');

  toggleBtn.addEventListener('click', () => {
    section.classList.toggle('show');
    toggleBtn.textContent = section.classList.contains('show') 
      ? '📂 Hide Projects' 
      : '📂 Show Projects';
  });
});

// script.js
window.addEventListener('click', () => {
  const music = document.getElementById('bg-music');
  if (music && music.paused) {
    music.play().catch(() => {});
  }
}, { once: true });
