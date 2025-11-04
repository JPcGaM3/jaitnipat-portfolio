const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
const root = document.documentElement;
const THEME_KEY = 'portfolio-theme';

const applyTheme = (isDark) => {
  root.classList.toggle('dark', isDark);
};

const storedTheme = localStorage.getItem(THEME_KEY);
if (storedTheme) {
  applyTheme(storedTheme === 'dark');
} else {
  applyTheme(prefersDark.matches);
}

prefersDark.addEventListener('change', (event) => {
  if (!localStorage.getItem(THEME_KEY)) {
    applyTheme(event.matches);
  }
});

document.querySelector('.theme-toggle').addEventListener('click', () => {
  const isDark = root.classList.toggle('dark');
  localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
});

const navToggle = document.querySelector('.nav-toggle');
const navList = document.getElementById('nav-list');
if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const nextState = navList.dataset.open !== 'true';
    navList.dataset.open = nextState;
    navToggle.setAttribute('aria-expanded', String(nextState));
  });

  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navList.dataset.open = 'false';
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const id = anchor.getAttribute('href').slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    target.removeAttribute('tabindex');
  });
});

const projectGrid = document.querySelector('[data-project-grid]');
const filterButtons = document.querySelectorAll('.chip');
if (projectGrid && filterButtons.length) {
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((btn) => btn.classList.remove('chip--active'));
      button.classList.add('chip--active');
      projectGrid.querySelectorAll('.project-card').forEach((card) => {
        const category = card.dataset.category;
        const isVisible = filter === 'all' || filter === category;
        card.style.display = isVisible ? 'flex' : 'none';
        card.setAttribute('aria-hidden', String(!isVisible));
      });
    });
  });
}

const yearElement = document.querySelector('[data-year]');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.section__header, .project-card, .skill-card, .timeline__item').forEach((el) => {
  el.classList.add('will-animate');
  observer.observe(el);
});
