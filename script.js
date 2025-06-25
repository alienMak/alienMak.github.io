// script.js

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  // Load saved theme
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
  }

  // Toggle theme
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Scroll reveal animation
  const revealSections = document.querySelectorAll('.section');

  const revealOnScroll = () => {
    revealSections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const isVisible = sectionTop < window.innerHeight - 100;
      if (isVisible) section.classList.add('visible');
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // reveal on page load
});
