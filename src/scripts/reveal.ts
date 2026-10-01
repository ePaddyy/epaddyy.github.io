/** Fade elements in as they enter the viewport. CSS only hides them when the .js class is present. */
const items = document.querySelectorAll<HTMLElement>('.reveal');
if (!('IntersectionObserver' in window)) {
  items.forEach((el) => el.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.08 },
  );
  items.forEach((el) => observer.observe(el));
}
