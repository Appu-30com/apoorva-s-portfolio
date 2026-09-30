export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "enterprise" | "fullstack" | "mobile" | "ai";
  categoryLabel: string;
  period?: string;
  description: string;
  highlights: string[];
  tags: string[];
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  role?: string;
  accentColor: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  current?: boolean;
  type: "Full-time" | "Internship";
  description: string;
  achievements: string[];
  technologies: string[];
  modules?: string[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  color: string;
  skills: {
    name: string;
    level: string;
    icon?: string;
    featured?: boolean;
  }[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  status: "In Progress" | "Completed";
  highlights?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  period: string;
  skills: string[];
  description: string;
  icon: string;
}

export const PERSONAL_INFO = {
  name: "Apoorva M P",
  shortName: "Apoorva",
  role: "Software Engineer | Full-Stack Developer",
  subRole: "React.js • TypeScript • Node.js • AWS",
  experienceYears: "1.5+",
  apiIntegrations: "30+",
  componentsBuilt: "10+",
  modulesDelivered: "7+",
  email: "apoorvaputtasswamy28@gmail.com",
  phone: "+91 7975354253",
  location: "Bangalore, Karnataka, India",
  linkedin: "https://linkedin.com/in/apoorva-m-p-47bb19255",
  github: "https://github.com/Appu-30com",
  bio: "Software Engineer with 1.5+ years of industry experience engineering responsive enterprise platforms, scalable web applications, and AI-driven workflows. Proficient in modern frontend architecture (React.js, TypeScript, Tailwind CSS), full-stack services (Node.js, Express, MongoDB), and cloud deployment (AWS EC2, S3, Docker, CI/CD).",
  educationPreview:
    "Pursuing MCA at Karnataka State Open University (expected 2028).",
  currentRole: "Software Engineer at Mindstack Solutions",
  status: "Open to Full-Stack & Front-End Engineering roles",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend Architecture",
    iconName: "Layout",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React.js", level: "Expert", featured: true },
      { name: "TypeScript", level: "Advanced", featured: true },
      { name: "Redux Toolkit", level: "Advanced", featured: true },
      { name: "Tailwind CSS", level: "Expert", featured: true },
      { name: "ShadCN UI & MUI", level: "Advanced", featured: true },
      { name: "HTML5 / Modern CSS", level: "Expert" },
      { name: "Responsive & A11y UI", level: "Expert" },
    ],
  },
  {
    category: "Backend & Databases",
    iconName: "Server",
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "Node.js", level: "Intermediate", featured: true },
      { name: "Express.js", level: "Intermediate", featured: true },
      { name: "MongoDB", level: "Intermediate", featured: true },
      { name: "RESTful API Design", level: "Advanced", featured: true },
      { name: "JWT Authentication", level: "Intermediate", featured: true },
      { name: "Socket.IO / WebSockets", level: "Intermediate" },
    ],
  },
  {
    category: "Cloud & DevOps",
    iconName: "Cloud",
    color: "from-sky-500 to-blue-600",
    skills: [
      { name: "AWS EC2 & S3", level: "Intermediate", featured: true },
      { name: "Docker", level: "Intermediate", featured: true },
      { name: "Netlify", level: "Advanced", featured: true },
      { name: "GitHub Actions CI/CD", level: "Intermediate", featured: true },
      { name: "Cloud Deployment", level: "Intermediate", featured: true },
      { name: "Git & Version Control", level: "Advanced" },
    ],
  },
  {
    category: "Mobile & Engineering Tools",
    iconName: "Smartphone",
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Flutter & Dart", level: "Proficient", featured: true },
      { name: "JavaScript (ES6+)", level: "Expert", featured: true },
      { name: "Postman & API Testing", level: "Advanced" },
      { name: "Chrome DevTools", level: "Expert" },
      { name: "AI Dev (Cursor / Windsurf)", level: "Advanced" },
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "mindstack-se",
    role: "Software Engineer — Front-End Developer",
    company: "Mindstack Solutions",
    companyUrl: "https://mindstacksolutions.com",
    location: "Bangalore, India",
    period: "Apr 2025 – Present",
    current: true,
    type: "Full-time",
    description:
      "Delivering enterprise telecom service platforms, role-based workflows, and AI-agent tooling.",
    modules: [
      "Agent",
      "System Admin",
      "Prompt Engineer",
      "Supervisor",
      "Retention",
      "AI Agent",
      "Operator Admin",
    ],
    achievements: [
      "Architected front-end interfaces for Conwio Radar across 7 enterprise modules with role-based access control.",
      "Integrated 30+ REST APIs handling data caching, zero-flicker loading states, and dynamic multi-step forms.",
      "Engineered 10+ reusable UI components with React.js, TypeScript, and Tailwind CSS, speeding up feature delivery.",
      "Configured Dockerized app environments and automated deployments via GitHub Actions and AWS EC2/S3.",
      "Built AI prompt configuration and agent supervisor interfaces in close collaboration with 10+ engineers.",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "ShadCN UI",
      "REST APIs",
      "Docker",
      "AWS EC2",
      "AWS S3",
      "GitHub Actions",
    ],
  },
  {
    id: "mindstack-intern",
    role: "Software Engineer Intern — Front-End Developer",
    company: "Mindstack Solutions",
    companyUrl: "https://mindstacksolutions.com",
    location: "Bangalore, India",
    period: "Nov 2024 – May 2025",
    current: false,
    type: "Internship",
    description:
      "Developed responsive UI modules and API integrations for client administrative dashboards.",
    achievements: [
      "Developed reusable UI components for User Management and AI Configuration modules using React.js and TypeScript.",
      "Integrated RESTful endpoints for real-time data tables, sorting, filtering, and form validations.",
      "Enhanced UI consistency across platforms utilizing Tailwind CSS, MUI, and ShadCN design tokens.",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "MUI",
      "Git",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "conwio-radar",
    title: "Conwio Radar",
    subtitle: "Enterprise Telecom Service Platform with AI-Agent Workflows",
    category: "enterprise",
    categoryLabel: "Enterprise & AI",
    period: "2025 – Present",
    role: "Front-End Developer",
    featured: true,
    accentColor: "from-blue-600 via-indigo-600 to-cyan-500",
    description:
      "A telecom service platform supporting multiple specialized user roles across 7 modules with AI-agent workflows, prompt configuration screens, and supervisor consoles.",
    highlights: [
      "Developed front-end interfaces for a telecom service platform supporting multiple specialized user roles across 7 modules — Agent, System Admin, Prompt Engineer, Supervisor, Retention, AI Agent, and Operator Admin.",
      "Built AI agent management interfaces, prompt configuration screens, and Agent Supervisor and Retention workflow screens based on user responsibilities and permissions.",
      "Developed 10+ reusable React components — tables, forms, filters, dialogs, configuration sections, and management screens.",
      "Integrated 30+ REST API endpoints, handling loading states, validation, error states, empty states, filtering, and dynamic UI updates.",
      "Collaborated with a cross-functional team of 10+ developers, designers, and backend engineers, aligning on API contracts, payload structures, and response formats.",
      "Used TypeScript throughout to maintain type-safe component logic, API data handling, and reusable front-end structures.",
    ],
    tags: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "AI Workflows",
      "REST APIs",
      "Role-Based UI",
      "Docker",
    ],
    metrics: [
      { label: "Role Modules", value: "7" },
      { label: "REST APIs", value: "30+" },
      { label: "Reusable UI", value: "10+" },
      { label: "Team Size", value: "10+ Devs" },
    ],
  },
  {
    id: "ccsi-platform",
    title: "CCSI — Customer Call Summarization & Insights",
    subtitle: "AI-Powered Customer Call Summarization and Insights Platform",
    category: "ai",
    categoryLabel: "AI & Analytics",
    period: "2024 – 2025",
    role: "Front-End Developer",
    featured: true,
    accentColor: "from-purple-600 via-pink-600 to-rose-500",
    description:
      "AI-powered customer call summarization and insights platform supporting 4+ distinct user roles with sentiment analysis, real-time transcripts, and system health telemetry.",
    highlights: [
      "Developed front-end interfaces for an AI-powered customer call summarization and insights platform supporting 4+ distinct user roles.",
      "Built User Management screens and Role & Permission interfaces for managing role-based access and application permissions.",
      "Developed System Monitoring screens for displaying system status, and real-time transcript interfaces for dynamic call conversation display.",
      "Implemented sentiment-related interfaces and filtering/reporting workflows for analyzing and organizing call data.",
      "Built responsive tables, forms, filters, dialogs, and status indicators using Tailwind CSS, MUI, and ShadCN UI.",
      "Managed application state with Redux Toolkit, and used Postman and Chrome DevTools for API testing and debugging.",
    ],
    tags: [
      "React TSX",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "MUI",
      "ShadCN UI",
      "REST APIs",
    ],
    metrics: [
      { label: "Supported Roles", value: "4+" },
      { label: "Realtime Streams", value: "Live Transcripts" },
      { label: "State Store", value: "Redux Toolkit" },
    ],
  },
  {
    id: "ecommerce-fullstack",
    title: "E-Commerce Web Application",
    subtitle: "Full-Stack Shopping Platform with Cart, Checkout & JWT",
    category: "fullstack",
    categoryLabel: "Full-Stack Web",
    period: "Personal Project",
    role: "Full-Stack Engineer",
    featured: true,
    accentColor: "from-emerald-500 via-teal-600 to-cyan-600",
    description:
      "A complete full-stack e-commerce application with product listing, product details, search, category filtering, cart management, and secure order processing.",
    highlights: [
      "Developed a full-stack e-commerce application with product listing, product details, search, category filtering, and cart management.",
      "Built shopping cart functionality (add/remove products, update quantities, calculate totals) plus checkout and order workflows.",
      "Developed REST APIs using Node.js and Express.js for products, users, cart, and orders, with MongoDB for data storage.",
      "Implemented JWT-based authentication, form validation, and loading/error/empty states across a responsive Tailwind CSS UI.",
    ],
    tags: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT Auth",
    ],
    metrics: [
      { label: "Architecture", value: "Full-Stack MERN" },
      { label: "Auth", value: "JWT Protected" },
      { label: "Database", value: "MongoDB" },
    ],
  },
  {
    id: "ai-chatbot-app",
    title: "AI Chatbot Application",
    subtitle: "Conversational AI Assistant with OpenAI API Integration",
    category: "ai",
    categoryLabel: "AI & Full-Stack",
    period: "Personal Project",
    role: "Full-Stack Engineer",
    featured: false,
    accentColor: "from-violet-600 via-purple-600 to-indigo-600",
    description:
      "Interactive conversational AI assistant featuring multi-turn conversation memory, prompt handling, streaming indicators, and cloud deployment.",
    highlights: [
      "Developed an interactive AI chatbot with a conversational UI, including message input, message display, loading indicators, and error handling.",
      "Integrated the OpenAI API through a Node.js/Express.js backend, designing REST endpoints that receive user messages and return AI-generated responses.",
      "Implemented conversation history, asynchronous request handling, and responsive layouts for desktop and mobile.",
      "Deployed the application using cloud infrastructure (Render / CI/CD).",
    ],
    tags: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "OpenAI API",
      "Render",
      "Tailwind CSS",
    ],
    metrics: [
      { label: "Deployment", value: "Cloud / CI/CD" },
      { label: "AI Engine", value: "OpenAI API" },
      { label: "Backend", value: "Node.js / Express" },
    ],
  },
  {
    id: "realtime-chat-app",
    title: "Real-Time Chat Application",
    subtitle: "Instant 1:1 and Group Messaging with Socket.IO & MongoDB",
    category: "fullstack",
    categoryLabel: "Full-Stack & WebSockets",
    period: "Personal Project",
    role: "Full-Stack Engineer",
    featured: false,
    accentColor: "from-sky-500 via-blue-600 to-indigo-700",
    description:
      "Real-time chat platform supporting one-to-one and group messaging, online/offline status presence, WebSocket events, and MongoDB conversation storage.",
    highlights: [
      "Developed a real-time chat application supporting one-to-one and group conversations, with chat list, conversation view, and message input components.",
      "Implemented real-time message delivery using Socket.IO/WebSocket, online/offline status indicators, and message timestamps.",
      "Built REST APIs for user and conversation management with Node.js and Express.js, using MongoDB to store users, conversations, and messages.",
      "Implemented authentication, protected routes, and handling for connection states, API errors, and empty conversations.",
    ],
    tags: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "MongoDB",
      "WebSockets",
    ],
    metrics: [
      { label: "Protocol", value: "WebSockets" },
      { label: "Engine", value: "Socket.IO" },
      { label: "Storage", value: "MongoDB" },
    ],
  },
  {
    id: "bee-food-rescue",
    title: "Bee — The Change Mobile App",
    subtitle: "Cross-Platform Food-Rescue & Marketplace Mobile App",
    category: "mobile",
    categoryLabel: "Mobile App",
    period: "2024",
    role: "Mobile App Developer",
    featured: false,
    accentColor: "from-amber-500 via-orange-500 to-emerald-500",
    description:
      "Food-rescue marketplace mobile application connecting donors and consumers with real-time food surplus listings and dynamic marketplace feeds.",
    highlights: [
      "Developed front-end/mobile interfaces for a food-rescue marketplace application, including responsive Flutter screens for listings and marketplace information.",
      "Integrated REST APIs to retrieve and display dynamic application data, and built reusable Flutter widgets for consistent UI patterns.",
      "Implemented navigation and user interaction flows for marketplace-related, API-driven screens.",
    ],
    tags: ["Flutter", "Dart", "Mobile UI", "REST APIs", "Cross-Platform"],
    metrics: [
      { label: "Framework", value: "Flutter & Dart" },
      { label: "API Flow", value: "RESTful" },
      { label: "Platform", value: "iOS & Android" },
    ],
  },
  {
    id: "employee-management",
    title: "Employee Management System",
    subtitle: "Enterprise Portal with Redux Toolkit, CRUD & Role-Based UI",
    category: "enterprise",
    categoryLabel: "Enterprise App",
    period: "Personal Project",
    role: "Frontend Engineer",
    featured: false,
    accentColor: "from-teal-600 via-emerald-600 to-cyan-700",
    description:
      "Comprehensive employee management portal with live search, sorting, filtering, pagination, modal forms, and Redux Toolkit state synchronization.",
    highlights: [
      "Developed an employee management application with search, filtering, sorting, and pagination on the employee listing screen.",
      "Built registration and profile forms covering department, designation, contact details, and employment status, plus employee details and edit workflows.",
      "Developed reusable tables, forms, modals, filters, and dashboard components, with Redux Toolkit for application-level state.",
      "Integrated REST APIs for full CRUD operations and implemented role-based workflows for administrators and employees.",
    ],
    tags: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "REST APIs",
      "CRUD UI",
    ],
    metrics: [
      { label: "State", value: "Redux Toolkit" },
      { label: "Operations", value: "Full CRUD" },
      { label: "Design", value: "Responsive UI" },
    ],
  },
];

export const EDUCATION_LIST: Education[] = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    institution: "Karnataka State Open University (KSOU)",
    location: "Mysuru, Karnataka, India",
    period: "2026 – 2028 (Expected)",
    status: "In Progress",
    highlights: [
      "Focusing on Advanced Software Engineering, Cloud Computing, Distributed Architectures, and Database Systems.",
      "Pursuing alongside professional software engineering career to strengthen computer science foundations.",
    ],
  },
  {
    id: "bsc-cs",
    degree: "Bachelor of Science — Computer Science",
    institution: "Bharathi College",
    location: "Bharathi Nagara, Mandya, Karnataka, India",
    period: "2021 – 2024",
    grade: "64.96%",
    status: "Completed",
    highlights: [
      "Core courses: Data Structures, Algorithms, Object-Oriented Programming (Java), Database Management (SQL), Web Technologies.",
      "Developed foundational hands-on programming projects and practical laboratory implementations.",
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "mindstack-cert",
    title: "Front-End Developer Internship Completion Certificate",
    issuer: "Mindstack Solutions Pvt. Ltd.",
    period: "Nov 2024 – May 2025",
    icon: "Award",
    skills: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "ShadCN UI",
      "RESTful APIs",
      "MUI",
      "Git",
    ],
    description:
      "Successfully completed a 6-month intensive frontend engineering internship delivering enterprise UI components, state architectures, and API integrations for client platforms.",
  },
  {
    id: "bosch-cert",
    title: "BRIDGE Program Certification",
    issuer: "Bosch India",
    period: "Completed",
    icon: "ShieldCheck",
    skills: [
      "Life Skills",
      "Soft Skills",
      "Job-Specific Skills",
      "Employability Enhancement",
    ],
    description:
      "Comprehensive training covering workplace soft skills, professional teamwork, analytical problem solving, and industry-standard best practices.",
  },
];
