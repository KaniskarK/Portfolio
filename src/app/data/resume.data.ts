export const RESUME_DATA = {
  profile: {
    name: 'Kaniskar K',
    role: 'Full Stack Engineer',
    email: 'kaniskark@outlook.com',
    phone: '+91 9788537533',
    linkedin: 'linkedin.com/in/kaniskark',
    github: 'github.com/Kaniskark',
    tagline: 'Software Developer with 2+ years of experience in .NET Core 8, Angular 18+, MSSQL, DevOps, and Cloud (Azure).',
    summary: 'Specialized in migrating legacy ASPX forms to modern .NET Framework, optimizing database performance, and implementing Agile processes with Jira. Designed CI/CD pipelines that reduced deployment time by 50%.'
  },
  skills: [
    {
      category: 'Languages', items: [
        { name: 'C#', icon: 'devicon-csharp-plain colored' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
        { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
        { name: 'HTML/CSS', icon: 'devicon-html5-plain colored' }
      ]
    },
    {
      category: 'Frameworks & Testing', items: [
        { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
        { name: 'RxJS', icon: 'devicon-rxjs-plain colored' },
        { name: '.NET Core', icon: 'devicon-dotnetcore-plain colored' },
        { name: '.NET Framework', icon: 'devicon-dot-net-plain colored' },
        { name: 'ASP.NET', icon: 'devicon-dot-net-plain colored' },
        { name: 'Playwright', icon: 'devicon-playwright-plain' },
        { name: 'Cypress', icon: 'devicon-cypressio-plain' }
      ]
    },
    {
      category: 'Databases & Tools', items: [
        { name: 'MSSQL', icon: 'devicon-microsoftsqlserver-plain colored' },
        { name: 'Git', icon: 'devicon-git-plain colored' },
        { name: 'SVN', icon: 'devicon-subversion-plain colored' },
        { name: 'Visual Studio', icon: 'devicon-visualstudio-plain colored' },
        { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
        { name: 'IIS', icon: '/iis.svg' },
        { name: 'AI', icon: 'pi pi-sparkles' }
      ]
    },
    {
      category: 'DevOps & Cloud', items: [
        { name: 'Jenkins', icon: '/jenkins.svg' },
        { name: 'Docker', icon: 'devicon-docker-plain colored' },
        { name: 'Prometheus', icon: 'devicon-prometheus-original' },
        { name: 'Grafana', icon: 'devicon-grafana-plain' },
        { name: 'Azure', icon: 'devicon-azure-plain colored' },
        { name: 'Batch Scripting', icon: 'devicon-bash-plain' }
      ]
    },
    {
      category: 'Methodologies', items: [
        { name: 'Agile', icon: 'pi pi-sync' },
        { name: 'Scrum', icon: 'pi pi-users' },
        { name: 'Jira', icon: 'devicon-jira-plain colored' },
        { name: 'SDLC', icon: 'pi pi-cog' }
      ]
    }
  ],
  experience: [
    {
      role: 'Full Stack Engineer',
      icon: 'engineering',
      company: 'Adrenalin eSystems (Polaris Group)',
      location: 'Chennai, India',
      date: 'July 2024 - Present',
      bullets: [
        'Legacy Migration: Converted legacy ASPX web forms (Employee Creation, Payroll, Absence modules) to modern .NET Framework with enhanced Angular UI.',
        'Developed .NET Core 8 APIs for attendance integration with HRMS systems for multiple clients.',
        'Agile Bug Management: Used Jira to track, prioritize, and rapidly resolve critical production issues.',
        'Implemented Windows services to collect HRMS metrics across 350+ databases (25 servers), improving data accessibility by 40%.',
        'Built CI/CD pipelines with Jenkins and batch scripts, reducing deployment time by 50% and manual efforts by 80%.',
        'Developed Grafana dashboards for HRMS metrics and a separate dashboard for IIS logs using Alloy and Loki.'
      ]
    },
    {
      role: 'Product Intern',
      icon: 'school',
      company: 'Adrenalin eSystems (Polaris Group)',
      location: 'Chennai, India',
      date: 'Feb 2024 - July 2024',
      bullets: [
        'Developed automated E2E tests using Cypress for HRMS forms, significantly reducing manual testing time.'
      ]
    }
  ],
  projects: [
    {
      title: 'Autonomous Surface Water Vehicle - RoboBoat',
      role: 'College Project',
      tech: ['YOLOv4', 'Python'],
      description: 'Developed tracking and navigation systems for an autonomous surface water vehicle.',
      github: ''
    },
    {
      title: 'Crack Detection Using Tello Drone',
      role: 'College Project',
      tech: ['HaarCascade', 'Python'],
      description: 'Led the team to implement visual crack detection algorithms via Tello drone camera.',
      github: 'https://github.com/KaniskarK/Crack_Detection-using-Tello-Drone'
    },
    {
      title: 'Life Guard Gloves by IoT Technology',
      role: 'College Project',
      tech: ['IoT', 'Embedded C', 'Sensors'],
      description: 'Built wearable IoT gloves with embedded sensors to assist in water rescue operations.',
      github: 'https://github.com/KaniskarK/Life_Guard_Gloves'
    }
  ],
  certifications: [
    { title: 'Azure Developer Associate (AZ-204)', issuer: 'Microsoft Azure', date: 'August 2025' },
    { title: 'Azure Fundamentals (AZ-900)', issuer: 'Microsoft Azure', date: 'December 2024' },
    { title: 'AWS Machine Learning', issuer: 'Coursera', date: 'May 2021' }
  ],
  education: [
    {
      degree: 'Bachelor of Computer Science & Engineering',
      school: 'Bannari Amman Institute of Technology, Sathyamangalam',
      date: '2020 - 2024',
      score: 'CGPA: 8.81'
    }
  ],
  achievements: [
    'Fast Starter Award: Recognized by Adrenalin eSystems for rapid onboarding and immediate project impact.',
    'ROBOBOAT 2022: International event by RoboNation, USA — Received $300 award.',
    'Electronic Wings: Early bird prize for "Life Guard Gloves by IoT".',
    'IdEEEas 2K21: 2nd place for "Survive For Help".'
  ]
};
