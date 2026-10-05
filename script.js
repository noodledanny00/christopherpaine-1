// Toggle Dark/Light Mode
const themeToggleBtn = document.getElementById('themeToggle');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

// Interactive Like Counter
const likeBtn = document.querySelector('.like-btn');
const likeCount = document.querySelector('.likes');
let count = 0;

likeBtn.addEventListener('click', () => {
  count++;
  likeCount.textContent = count;
});