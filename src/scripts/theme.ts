/** Theme toggle. The initial theme is applied before paint by the inline script in BaseLayout. */
const STORAGE_KEY = 'theme';
type Theme = 'light' | 'dark';

function apply(theme: Theme, button: HTMLElement) {
  document.documentElement.dataset.theme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'dark' ? '#0b0f17' : '#ffffff');
  button.setAttribute(
    'aria-label',
    theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
  );
}

const button = document.getElementById('themeToggle');
if (button) {
  apply((document.documentElement.dataset.theme as Theme) ?? 'light', button);
  button.addEventListener('click', () => {
    const next: Theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage blocked: theme still changes for this page view */
    }
    apply(next, button);
  });
}
