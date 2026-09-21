export const EXPERIENCE = [
  {
    company: "Luxoft",
    title: "Senior Software Engineer",
    dates: "Oct 2024 — Present",
    project: "Starlink in-flight Wi-Fi & entertainment · United Airlines",
    bullets: [
      "Built reusable custom hooks and components used across the passenger-facing app",
      "Added an authentication component that gates the app for invalid or unauthenticated users",
      "Wrote Vitest coverage across the app and raised overall test coverage",
      "Reviewed code and set coding standards for the team; wrote technical specs from business requirements",
    ],
    tags: ["React.js", "TypeScript", "SCSS", "Vitest", "Redux-Saga", "Redux-Thunk", "React Testing Library"],
  },
  {
    company: "GlobalLogic",
    title: "Senior Software Engineer",
    dates: "Jul 2022 — Aug 2024",
    project: "DISA modernization · DISA Global Solutions",
    bullets: [
      "Migrated legacy application modules to a modern React-based architecture",
      "Built and hardened reusable UI components with React, Redux Saga and TypeScript",
    ],
    tags: ["React.js", "Redux Saga", "TypeScript", "SCSS", "Jest"],
  },
  {
    company: "GlobalLogic",
    title: "Senior Software Engineer",
    dates: "Jul 2022 — Aug 2024",
    project: "Sinclair Broadcasting · 177 TV stations nationwide",
    bullets: [
      "Built and maintained REST API endpoints in Node.js supporting station-facing tooling",
      "Built automated regression suites with Jest and Selenium WebDriver to streamline release validation",
    ],
    tags: ["Node.js", "NextJS", "Jest", "Selenium WebDriver", "REST APIs"],
  },
  {
    company: "Publicis Sapient",
    title: "Associate Technology L2",
    dates: "Nov 2021 — Jul 2022",
    project: "Verizon internal inventory management",
    bullets: [
      "Built rating-form modules and reusable UI components, standardizing validation and layout across product teams",
      "Implemented message-bus communication for data exchange across micro-frontend modules",
      "Built Axios interceptors and shared utilities to centralize auth headers, error handling and request logging",
    ],
    tags: ["React.js", "Micro Frontends", "Redux Saga", "TypeScript"],
  },
  {
    company: "Xebia IT Architects",
    title: "Consultant",
    dates: "Nov 2020 — Sep 2021",
    project: "IDFC FIRST Bank · credit card platform",
    bullets: [
      "Built credit card block/unblock functionality for the bank's mobile and web app, improving customer self-service",
      "Developed virtual card generation and account management UI for a client onboarding and workflow platform",
      "Wrote Jest unit tests to protect critical financial front-end workflows ahead of production release",
    ],
    tags: ["ReactJS", "React Native", "Redux", "Jest", "Agile"],
  },
  {
    company: "TechAhead",
    title: "Associate Software Engineer",
    dates: "Jul 2019 — Nov 2019",
    project: "Erin · employee referral & internal mobility app",
    bullets: [
      "Built reusable components with styled-components across several business modules",
      "Implemented add, update, delete and listing UI for job postings, plus page routing",
    ],
    tags: ["React Native", "Redux", "GraphQL", "Jest"],
  },
  {
    company: "Root Info Solutions",
    title: "Associate Software Engineer",
    dates: "Feb 2018 — Jul 2019",
    project: "Yeswa · e-commerce for customers & vendors",
    bullets: [
      "Built nearby-product-availability and cart functionality for the customer app",
      "Built a vendor dashboard for inventory and order tracking",
      "Debugged and optimized modules for cross-device responsiveness",
    ],
    tags: ["React.js", "React Native", "Redux Thunk", "HTML/CSS"],
  },
];

export const SKILL_GROUPS = [
  { title: "Core", items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS/CSS3"] },
  { title: "Frameworks & state", items: ["React.js", "React Native", "Redux", "Redux-Toolkit", "Redux-Saga", "Redux-Thunk", "NextJS", "Mobx"] },
  { title: "Backend & data", items: ["Node.js", "Express", "MongoDB", "GraphQL", "REST APIs"] },
  { title: "Testing", items: ["Jest", "Vitest", "React Testing Library", "Selenium WebDriver"] },
  { title: "Tooling & infra", items: ["Git / GitHub / GitLab / Bitbucket", "Webpack", "Babel", "Docker", "AWS S3", "GitHub Actions", "CI/CD", "Storybook"] },
  { title: "AI tooling", items: ["GitHub Copilot", "Claude", "ChatGPT", "Prompt Engineering", "RAG", "LangChain", "ChromaDB", "Python"] },
];

export const EDUCATION = [
  { school: "APJ Abdul Kalam Technical University (AKTU), Lucknow", degree: "B.Tech, Computer Science & Engineering", date: "May 2017" },
  { school: "Jawahar Navodaya Vidyalaya, Sultanpur", degree: "12th, Science", date: "Jun 2012" },
  { school: "Jawahar Navodaya Vidyalaya, Sultanpur", degree: "10th, Science", date: "Jun 2010" },
];

export const FEATURED_PROJECT = {
  title: "AI-powered PDF question-answering app",
  description:
    "A full-stack RAG application for asking questions across multiple uploaded PDFs. Handles multi-PDF upload, document parsing and text chunking, generates embeddings, runs in-memory vector search, and returns context-aware answers with source and page references.",
  tags: ["React", "Vite", "Node.js", "Express", "LangChain", "OpenAI", "Multer", "PDF parsing"],
};

export const PROFILE = {
  name: "Shivram Yadav",
  role: "Senior Software Engineer — React & TypeScript",
  lede:
    "Almost 8 years building production front ends for banking, travel and enterprise platforms — credit card management, in-flight entertainment, micro-frontends and internal dashboards — with React, Redux and TypeScript end to end.",
  email: "shivramyadav52@gmail.com",
  phone: "+91-7897455196",
  phoneDisplay: "+91 78974 55196",
  location: "Lucknow, India 226002",
};
