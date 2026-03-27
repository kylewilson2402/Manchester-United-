// nav.js — MMP 240 Midterm | Kyonic Designs

document.addEventListener('DOMContentLoaded', function () {

  // --- Hamburger toggle ---
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      navMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', navMenu.classList.contains('open'));
    });
  }

  // --- Active nav link ---
  const currentPage = window.location.pathname.split('/').pop() || 'manutd.html';
  document.querySelectorAll('nav ul li a').forEach(function (link) {
    if (link.getAttribute('href') === currentPage) link.classList.add('active');
  });

  // --- Scroll reveal ---
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }

});

  // --- Assignments widget toggle ---
  const toggle = document.querySelector('.assignments-toggle');
  const panel  = document.querySelector('.assignments-panel');
  if (toggle && panel) {
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      panel.classList.toggle('open');
    });
    document.addEventListener('click', function () {
      panel.classList.remove('open');
    });
  }
