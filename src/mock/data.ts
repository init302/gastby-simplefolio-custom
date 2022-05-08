import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'zizivoice.jpg',
    title: 'Happy Voice & ZiZi Voice',
    info: '',
    info2: '',
    url: 'https://www.youtube.com/watch?v=Ea-0GqrWqzA',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'uzuzombie.png',
    title: '우주좀비',
    info: '',
    info2: '',
    url: 'https://www.youtube.com/watch?v=AcSPuOGmaTc',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dora.jpg',
    title: 'Learn with Dora',
    info: '',
    info2: '',
    url: 'https://www.youtube.com/watch?v=maE2GW-tXcE',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'finalblade.jpg',
    title: 'Final Blade',
    info: '',
    info2: '',
    url: 'https://www.youtube.com/watch?v=qFXdiKKeRug&list=PLoB9krJFZxWMlbxoxYN4WRYxedXIR-fJl&index=7',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fivestars.jpg',
    title: '파이브스타즈 for klaytn',
    info: '',
    info2: '',
    url: 'https://www.youtube.com/watch?v=v1aF864cxH0',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '레이드 마스터즈',
    info: '',
    info2: '',
    url: 'https://www.youtube.com/watch?v=DNBV1lQhR9Y',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'kangin3778@gmail.com',
  email: 'kangin3778@gamil.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/init302',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
