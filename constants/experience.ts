export interface Job {
  title: string
  company: string
  companyUrl: string
  dateRange: string
  description: string
  skills: string[]
}

export const jobs: Job[] = [
  {
    title: 'Software Engineer',
    company: 'Iterative Edge',
    companyUrl: 'https://iterative-edge.dev',
    dateRange: '2024 — Present',
    description: 'Currently freelancing for a small company building out AI infrastructure in the property ' +
      'technology sector. Working on a few other small projects in parallel.',
    skills: ['PHP', 'Laravel', 'Nova', 'JavaScript', 'Vue.js', 'React', 'Typescript'],
  },
  {
    title: 'Software Engineer',
    company: 'Substantive Research',
    companyUrl: 'https://substantiveresearch.com',
    dateRange: '2021 — 2024',
    description: 'Mentored junior developers and fostered an environment of collaboration and knowledge sharing. ' +
      'Improved code quality through testing, refactoring, upgrading the tech stack and built a streamlined ' +
      'CI/CD pipeline. Engaged with clients to ensure features met their needs and delivered lasting value. ' +
      'Maintained a strong emphasis on secure coding practices and conducted annual penetration tests to ' +
      'safeguard sensitive data, ensuring industry compliance.',
    skills: [
      'PHP', 'Laravel', 'PHPUnit', 'JavaScript', 'Vue.js', 'Python', 'Django', 'Cypress', 'SASS', 'TailwindCSS', 'AWS',
      'Docker', 'CI/CD', 'Elementor', 'WordPress'
    ]
  },
  {
    title: 'Junior Software Developer',
    company: 'Gigabyte Software',
    companyUrl: 'https://www.gigabyte.software',
    dateRange: '2018 — 2021',
    description: 'Worked with stakeholders to enhance a bespoke enterprise system, maintained & improved legacy code,' +
      ' fixed bugs and added new features. Prototyped multiple greenfield projects. Facilitated team communication ' +
      'as a part-time scrum master, and improved workflow through sprint planning and retrospectives.',
    skills: ['PHP', 'Symfony', 'PHPUnit', 'JavaScript', 'Vue.js', 'MySQL', 'HTML', 'CSS', 'DDD']
  },
  {
    title: 'Physics & Science Tutor',
    company: 'Self-employed',
    companyUrl: '#',
    dateRange: '2018 — 2019',
    description: 'Provided online tutoring in physics, science, and English while transitioning into software ' +
      'development. Developed fundamental programming skills through self-directed learning and practical projects.',
    skills: ['Teaching', 'PHP', 'JavaScript', 'Python', 'MySQL']
  },
  {
    title: 'Physics Teacher',
    company: "St. Andrew's Scots School",
    companyUrl: 'https://www1.sanandres.esc.edu.ar/Home/',
    dateRange: '2017 — 2018',
    description: 'Taught IB Physics and IGCSE science, while leading innovative learning initiatives including ' +
      'design thinking projects. Organized and led international educational trips, including a science project ' +
      'in Patagonia.',
    skills: ['IB Physics', 'IGCSE']
  },
  {
    title: 'Physics Teacher',
    company: 'Preston Lodge High School',
    companyUrl: 'https://www.prestonlodge.net',
    dateRange: '2014 — 2016',
    description: 'Led physics curriculum development and implemented innovative teaching methods through the ' +
      'Accelerated Learning Cycle. Ran multiple STEM clubs including young engineers and computing.',
    skills: ['Curriculum for Excellence', 'Highers', 'Nationals']
  },
  {
    title: 'Physics Teacher',
    company: 'Fraserburgh Academy',
    companyUrl: 'https://www.fraserburgh.aberdeenshire.sch.uk/',
    dateRange: '2013 — 2014',
    description: 'Developed and implemented new physics curriculum while representing the school at various ' +
      'educational bodies including SQA and IoP. Led student sports teams and teacher development initiatives.',
    skills: ['Curriculum for Excellence', 'Highers', 'Nationals']
  }
];
