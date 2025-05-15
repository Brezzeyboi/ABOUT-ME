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
