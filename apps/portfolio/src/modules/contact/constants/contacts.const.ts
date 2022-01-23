const email = 'benjamin@montazer.dev';

export const CONTACTS = [
  {
    icon: 'email',
    text: email,
    href: `mailto:${email}`,
  },
  {
    icon: 'linkedin',
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/in/montazer-benjamin/',
  },
] as const;
