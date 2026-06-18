/**
 * Ephraim Family Dental — Premium Interactions
 */

// Navigation scroll effect
const nav = document.getElementById('nav');
let lastScroll = 0;

function handleNavScroll() {
  const scrollY = window.scrollY;
  nav.classList.toggle('scrolled', scrollY > 40);
  lastScroll = scrollY;
}

window.addEventListener('scroll', handleNavScroll, { passive: true });
handleNavScroll();

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

navToggle?.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Scroll reveal animations
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

revealElements.forEach((el) => revealObserver.observe(el));

// Hero elements visible on load
requestAnimationFrame(() => {
  document.querySelectorAll('.hero .reveal').forEach((el) => {
    el.classList.add('visible');
  });
});

// Gentle parallax on hero shapes
const heroShapes = document.querySelectorAll('.hero__shape');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion && heroShapes.length) {
  window.addEventListener(
    'scroll',
    () => {
      const scrollY = window.scrollY;
      heroShapes.forEach((shape, i) => {
        const speed = 0.03 + i * 0.02;
        shape.style.transform = `translateY(${scrollY * speed}px)`;
      });
    },
    { passive: true }
  );
}

// Lightbox for office tour gallery
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

document.querySelectorAll('[data-lightbox]').forEach((item) => {
  item.addEventListener('click', () => {
    const src = item.dataset.lightbox;
    const alt = item.querySelector('img')?.alt || '';
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
  lightboxImg.src = '';
}

lightboxClose?.addEventListener('click', closeLightbox);

lightbox?.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox?.classList.contains('active')) {
    closeLightbox();
  }
});

// Smooth anchor scrolling with nav offset
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 80;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });
});

// Subtle parallax on hero images
const heroVisual = document.querySelector('.hero__visual');
if (!prefersReducedMotion && heroVisual) {
  window.addEventListener(
    'scroll',
    () => {
      const rect = heroVisual.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        const offset = (rect.top / window.innerHeight) * 20;
        heroVisual.style.transform = `translateY(${offset}px)`;
      }
    },
    { passive: true }
  );
}
