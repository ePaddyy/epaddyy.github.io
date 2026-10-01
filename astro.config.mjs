// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Production URL. Used for canonical links, the sitemap and social-preview images.
  site: 'https://epaddyy.github.io',
  trailingSlash: 'always',
  integrations: [sitemap()],
  // No code blocks on the site; Shiki's inline styles would also conflict with the CSP.
  markdown: { syntaxHighlight: false },
  security: {
    // Content Security Policy: Astro hashes every script and style it emits and
    // writes the policy into each page, so nothing unexpected can run.
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        // Formspree (contact form) and GoatCounter (optional analytics)
        "connect-src 'self' https://formspree.io https://*.goatcounter.com",
        'form-action https://formspree.io',
        "base-uri 'self'",
        "object-src 'none'",
      ],
      scriptDirective: { resources: ["'self'", 'https://gc.zgo.at'] },
    },
  },
  fonts: [
    {
      // Downloaded at build time and self-hosted: no request to Google from visitors.
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
});
