const email = 'benjamin@montazer.dev';

export const CONTACTS = [
  {
    icon: 'email',
    text: email,
    href: `mailto:${email}`,
    tooltip: 'Send me an email',
  },
  {
    icon: 'linkedin',
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/in/montazer-benjamin/',
    tooltip: 'Find me on LinkedIn',
  },
] as const;
