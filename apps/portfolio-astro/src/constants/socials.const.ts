import LogoGithub from '~icons/carbon/logo-github';
import LogoLinkedin from '~icons/carbon/logo-linkedin';
import MailIcon from '~icons/fluent/mention-24-regular';

import type { Icon } from '../models/icon.model';

export interface Link {
  Icon: Icon;
  props: Partial<astroHTML.JSX.AnchorHTMLAttributes>;
}

export const socials: Link[] = [
  {
    Icon: LogoGithub,

    props: {
      href: 'https://github.com/fruchtzwerg/portfolio',
      target: '_blank',
      'aria-label': 'Github',
    },
  },
  {
    Icon: LogoLinkedin,

    props: {
      href: 'https://www.linkedin.com/in/montazer-benjamin/',
      target: '_blank',
      'aria-label': 'LinkedIn',
    },
  },
  {
    Icon: MailIcon,

    props: {
      href: 'mailto:benjamin@montazer.dev',
      'aria-label': 'E-Mail',
    },
  },
];
