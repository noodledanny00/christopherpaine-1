// Active navigation link highlighter
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.href === window.location.href) {
    link.style.color = 'var(--accent-color)';
    link.style.borderBottom = '2px solid var(--accent-color)';
  }
});

// Dark/Light Mode Switcher
const themeToggleBtn = document.getElementById('themeToggle');
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
      themeToggleBtn.textContent = '☀️ Light Mode';
    } else {
      themeToggleBtn.textContent = '✨ Dark Mode';
    }
  });
}