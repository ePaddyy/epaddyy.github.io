/** Header border on scroll, mobile menu, and scrollspy for home-page sections. */
const header = document.querySelector<HTMLElement>('.site-header');
if (header) {
  const update = () => header.classList.toggle('scrolled', window.scrollY > 8);
  update();
  window.addEventListener('scroll', update, { passive: true });
}

const toggle = document.getElementById('navToggle');
const nav = document.getElementById('siteNav');
if (toggle && nav) {
  const setOpen = (open: boolean) => {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('open') && !(e.target as Element).closest('.site-header'))
      setOpen(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
}

// Scrollspy: only links that point at a section on the current page
const spyLinks = [...document.querySelectorAll<HTMLAnchorElement>('.site-nav a[data-section]')];
if (spyLinks.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        for (const link of spyLinks) {
          link.classList.toggle('active', link.dataset.section === entry.target.id);
        }
      }
    },
    { rootMargin: '-40% 0px -55% 0px' },
  );
  document.querySelectorAll('main section[id]').forEach((s) => observer.observe(s));
}
