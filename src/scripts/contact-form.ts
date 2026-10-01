/**
 * Submit the contact form to Formspree without leaving the page.
 * Without JavaScript the form still posts normally.
 */
const form = document.querySelector<HTMLFormElement>('#contactForm');
const statusEl = document.querySelector<HTMLElement>('#formStatus');

if (form && statusEl) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const setStatus = (text: string, kind: 'success' | 'error' | '') => {
      statusEl.textContent = text;
      statusEl.className = `form-status${kind ? ` is-${kind}` : ''}`;
    };

    button?.setAttribute('disabled', '');
    setStatus('Sending…', '');
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      form.reset();
      setStatus("Thanks, your message has been sent. I'll reply by email.", 'success');
    } catch {
      setStatus('Sorry, something went wrong. Please email me directly instead.', 'error');
    } finally {
      button?.removeAttribute('disabled');
    }
  });
}
