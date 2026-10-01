/**
 * Site-wide facts. This is the ONLY place these values are written;
 * every page, component and meta tag reads them from here.
 */
export const site = {
  name: 'Emmanuel Paddy Adams',
  shortName: 'EPA',
  role: 'Machine Learning Engineer',
  location: 'Accra, Ghana',
  description:
    'Emmanuel Paddy Adams is a machine learning engineer in Accra, Ghana who builds, evaluates and ships predictive models, from raw data to working tools.',
  email: 'epaddyy@gmail.com',
  /** Path under /public. */
  cv: '/cv/emmanuel-paddy-adams-cv.pdf',
  availability: 'Open to ML & data roles · on-site in Accra or remote',
  /** Formspree endpoint for the contact form. */
  formAction: 'https://formspree.io/f/mzdjkenk',
  /** GoatCounter site code (the part before .goatcounter.com). Empty = analytics off. */
  goatcounter: '',
  socials: [
    {
      label: 'GitHub',
      handle: 'github.com/ePaddyy',
      href: 'https://github.com/ePaddyy',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      handle: 'emmanuel-paddy-adams',
      href: 'https://www.linkedin.com/in/emmanuel-paddy-adams',
      icon: 'linkedin',
    },
    { label: 'X / Twitter', handle: '@paddy_eman', href: 'https://x.com/paddy_eman', icon: 'x' },
  ],
  twitterHandle: '@paddy_eman',
} as const;

export const nav = [
  { label: 'About', href: '/#about' },
  { label: 'Work', href: '/projects/' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Writing', href: '/writing/', requiresPosts: true },
  { label: 'Contact', href: '/#contact' },
] as const;
