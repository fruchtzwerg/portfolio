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
  {
    icon: 'github',
    text: 'Github',
    href: 'https://github.com/fruchtzwerg/portfolio',
    tooltip: 'Check out the source of this page',
  },
] as const;
