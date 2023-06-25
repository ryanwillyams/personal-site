import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/ryanwillyams',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/ryan-williams-06597a218/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },

  {
    link: 'mailto:ryanwillyamsdo@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
