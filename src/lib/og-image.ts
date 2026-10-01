import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { site } from '../config/site';

const require = createRequire(import.meta.url);
const fontFile = (weight: number) =>
  readFile(require.resolve(`@fontsource/inter/files/inter-latin-${weight}-normal.woff`));

// Satori takes a React-like element tree; plain objects avoid needing JSX here.
type Node = { type: string; props: { style?: Record<string, unknown>; children?: unknown } };
const h = (type: string, style: Record<string, unknown>, children?: unknown): Node => ({
  type,
  props: { style, children },
});

/** Render a 1200×630 social-preview PNG at build time. */
export async function renderOgImage({ title, eyebrow }: { title: string; eyebrow: string }) {
  const [regular, semibold, bold] = await Promise.all([
    fontFile(400),
    fontFile(600),
    fontFile(700),
  ]);
  const host = new URL(import.meta.env.SITE).host;

  const tree = h(
    'div',
    {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '72px 80px',
      background: '#ffffff',
      borderTop: '14px solid #1d4ed8',
      fontFamily: 'Inter',
      color: '#101828',
    },
    [
      h(
        'div',
        {
          display: 'flex',
          alignItems: 'center',
          gap: 18,
          fontSize: 26,
          fontWeight: 600,
          color: '#344054',
        },
        [
          h(
            'div',
            {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 60,
              height: 60,
              borderRadius: 14,
              background: '#1d4ed8',
              color: '#ffffff',
              fontSize: 19,
              fontWeight: 700,
            },
            site.shortName,
          ),
          h('div', { display: 'flex' }, host),
        ],
      ),
      h('div', { display: 'flex', flexDirection: 'column' }, [
        h(
          'div',
          { display: 'flex', fontSize: 30, fontWeight: 600, color: '#1d4ed8', marginBottom: 18 },
          eyebrow,
        ),
        h(
          'div',
          {
            display: 'flex',
            fontSize: title.length > 40 ? 62 : 76,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.08,
          },
          title,
        ),
      ]),
      h(
        'div',
        { display: 'flex', justifyContent: 'space-between', fontSize: 24, color: '#667085' },
        [
          h('div', { display: 'flex' }, `${site.name} · ${site.role}`),
          h('div', { display: 'flex' }, site.location),
        ],
      ),
    ],
  );

  const svg = await satori(tree as never, {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Inter', data: regular, weight: 400, style: 'normal' },
      { name: 'Inter', data: semibold, weight: 600, style: 'normal' },
      { name: 'Inter', data: bold, weight: 700, style: 'normal' },
    ],
  });
  return new Resvg(svg).render().asPng();
}
