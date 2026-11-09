// Mobile navigation toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Close' : 'Menu';
  });

  // Close the menu after choosing a section
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = 'Menu';
    });
  });
}

// Keep the footer year current
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Respect reduced-motion: hold videos on their poster and offer controls instead
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('video[autoplay]').forEach((v) => {
    v.removeAttribute('autoplay');
    v.pause();
    v.controls = true;
  });
}
