/** Category filter on the Work page. */
const buttons = [...document.querySelectorAll<HTMLButtonElement>('.filter-btn')];
const cards = [...document.querySelectorAll<HTMLElement>('#projectGrid .project-card')];

for (const button of buttons) {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    for (const b of buttons) {
      const active = b === button;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', String(active));
    }
    for (const card of cards) {
      card.hidden = !(filter === 'all' || card.dataset.cat === filter);
      card.classList.add('is-visible');
    }
  });
}
