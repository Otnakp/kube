document.getElementById('theme-toggle').addEventListener('click', () => {
  const body = document.querySelector('body');

  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    localStorage.removeItem('dark-mode');
  } else {
    body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'true');
  }
});

// Check if the user has previously enabled dark mode
if (localStorage.getItem('dark-mode') === 'true') {
  document.querySelector('body').classList.add('dark-mode');
}
