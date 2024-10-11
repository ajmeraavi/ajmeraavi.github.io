const CONFIG = {
  github: {
    username: 'ajmeraavi', // Your GitHub username
  },
  base: '/',
  projects: {
    github: {
      display: false, // Keep GitHub projects hidden for now
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Real-Time Scalable Leaderboard System',
          description: 'Engineered a real-time leaderboard system with Next.js, Redis Streams, Socket.io, and Node.js. Designed a distributed producer-consumer system for real-time event processing, optimizing response times for high-traffic periods.',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/ajmeraavi/leaderboard-system',
        },
        {
          title: 'Cloud EV Charging Station Finder Application',
          description: 'Constructed a real-time EV Charging Station Finder using React Native, Expo, Google Maps API, and Firebase for real-time updates and secure user authentication.',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/ajmeraavi/ev-charging-station-finder',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Avi Ajmera',
    description: 'Portfolio showcasing projects and experience of Avi Ajmera, a Software Engineering graduate student at San Jose State University.',
    imageURL: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
  },
  social: {
    linkedin: 'aviajmera',
    medium: 'ajmeraavi',
    phone: '(669) 301-5894',
    email: 'ajmeraavi@gmail.com',
  },
  resume: {
    fileUrl: 'http://ajmeraavi.github.io/avi-ajmera-resume.pdf', // Update this link if needed
  },
  skills: [
    'Python',
    'JavaScript',
    'React.js',
    'Next.js',
    'Node.js',
    'Redis',
    'Firebase',
    'MongoDB',
    'MySQL',
    'Tableau',
    'Docker',
    'Kubernetes',
    'Git',
  ],
  experiences: [
    {
      company: 'San Jose State University',
      position: 'Graduate Project Lead',
      from: 'May 2024',
      to: 'Present',
    },
    {
      company: 'Aavas Financiers',
      position: 'Data Analytics Intern',
      from: 'May 2022',
      to: 'September 2022',
    },
    {
      company: 'Deorwine Infotech',
      position: 'Software Developer Intern',
      from: 'May 2021',
      to: 'June 2021',
    },
  ],
  educations: [
    {
      institution: 'San Jose State University',
      degree: 'Master of Science in Software Engineering',
      from: '2023',
      to: 'Expected 2025',
    },
    {
      institution: 'NMIMS University',
      degree: 'Master of Business Administration in Technology Management',
      from: '2018',
      to: '2023',
    },
    {
      institution: 'NMIMS University',
      degree: 'Bachelor of Technology in Computer Engineering',
      from: '2018',
      to: '2023',
    },
  ],
  publications: [
    {
      title: 'Sentiment Analysis of IMDb movie reviews',
      authors: 'Avi Ajmera, et al.',
      link: 'https://doi.org/10.22214/ijraset.2022.47795',
      description: 'Performed sentiment analysis on IMDb movie reviews using machine learning techniques to predict viewer sentiment and enhance recommendation systems.',
    },
    {
      title: 'Crop, Fertilizer, & Irrigation Recommendation using Machine Learning Techniques',
      authors: 'Avi Ajmera, et al.',
      link: 'https://doi.org/10.22214/ijraset.2022.47793',
      description: 'Developed a machine learning-based system to provide optimized crop, fertilizer, and irrigation recommendations, enhancing agricultural productivity.',
    },
  ],
  blog: {
    source: 'medium',
    username: 'ajmeraavi',
    limit: 10,
  },
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'lofi',
      'winter',
      'night',
    ],
  },
  footer: `Made with ❤️ by Avi Ajmera`,
  enablePWA: true,
};

export default CONFIG;
