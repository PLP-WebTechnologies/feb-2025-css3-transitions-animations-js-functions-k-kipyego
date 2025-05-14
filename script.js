// Save and load theme with localStorage
function saveTheme(theme) {
  localStorage.setItem('theme', theme);
}
function loadTheme() {
  const theme = localStorage.getItem('theme') || 'light';
  document.body.classList.add(theme);
  document.getElementById('themeSelect').value = theme;
}
window.addEventListener('DOMContentLoaded', loadTheme);

// Theme selection and persistence
const themeSelect = document.getElementById('themeSelect');
const saveBtn = document.getElementById('saveTheme');
saveBtn.addEventListener('click', () => {
  const selected = themeSelect.value;
  document.body.classList.remove('light', 'dark');
  document.body.classList.add(selected);
  saveTheme(selected);
});

// Trigger CSS animation on button click
const animateBtn = document.getElementById('animateBtn');
animateBtn.addEventListener('click', () => {
  animateBtn.classList.add('animate');
  animateBtn.addEventListener('animationend', () => {
    animateBtn.classList.remove('animate');
  }, { once: true });
});
